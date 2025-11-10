import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NavigationItem } from '../../../layout/admin/navigation/navigation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  standalone: true,
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  // public props
  @Input() type: string;
  navigation: any;
  breadcrumbList: Array<any> = [];
  navigationList: any;
  routerSubscription: Subscription;

  constructor(
    private _router: Router,
    public nav: NavigationItem,
   
    private titleService: Title
  ) {
    this.navigation = this.nav.get();
  }

  ngOnInit() {
    this.setBreadcrumb();
  }

  ngOnDestroy() {
    // Unsubscribe from the router events to avoid memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // public method
  setBreadcrumb() {
    // Subscribe to router events
    this.routerSubscription = this._router.events.subscribe((router: any) => {
      const routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        this.breadcrumbList.length = 0;
        const activeLink = router.url;
        this.filterNavigation(activeLink);
      }
    });
  }

  filterNavigation(activeLink: any) {
    let result: any;
    let title = 'Welcome';
    
    // Use arrow functions instead of 'function' for better readability and binding
    this.navigation.forEach((a: any) => {
      if (a.type === 'item' && 'url' in a && a.url === activeLink) {
        result = [
          {
            url: a.url || false,
            title: a.title,
            breadcrumbs: a.breadcrumbs !== undefined ? a.breadcrumbs : true,
            type: a.type,
          },
        ];
        title = a.title;
      } else if (a.type === 'group' && 'children' in a) {
        a.children.forEach((b: any) => {
          if (b.type === 'item' && 'url' in b && b.url === activeLink) {
            result = [
              {
                url: a.url || false,
                title: a.title,
                breadcrumbs: a.breadcrumbs !== undefined ? a.breadcrumbs : true,
                type: a.type,
              },
              {
                url: b.url || false,
                title: b.title,
                breadcrumbs: b.breadcrumbs !== undefined ? b.breadcrumbs : true,
                type: b.type,
              },
            ];
            title = b.title;
          } else if (b.type === 'collapse' && 'children' in b) {
            b.children.forEach((c: any) => {
              if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                result = [
                  {
                    url: b.url || false,
                    title: b.title,
                    breadcrumbs: b.breadcrumbs !== undefined ? b.breadcrumbs : true,
                    type: b.type,
                  },
                  {
                    url: c.url || false,
                    title: c.title,
                    breadcrumbs: c.breadcrumbs !== undefined ? c.breadcrumbs : true,
                    type: c.type,
                  },
                ];
                title = c.title;
              } else if (c.type === 'collapse' && 'children' in c) {
                c.children.forEach((d: any) => {
                  if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                    result = [
                      {
                        url: c.url || false,
                        title: c.title,
                        breadcrumbs: c.breadcrumbs !== undefined ? c.breadcrumbs : true,
                        type: c.type,
                      },
                      {
                        url: d.url || false,
                        title: d.title,
                        breadcrumbs: d.breadcrumbs !== undefined ? d.breadcrumbs : true,
                        type: d.type,
                      },
                    ];
                    title = d.title;
                  }
                });
              }
            });
          }
        });
      }
    });

    // Update the breadcrumb list and set the page title
    this.navigationList = result;
    this.titleService.setTitle(`${title} | Berry Angular Template`);
  }
}
