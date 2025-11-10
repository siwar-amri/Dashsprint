import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'page',
    title: 'Export',
    type: 'group',
    icon: 'icon-export',
    children: [
      {
        id: 'Authentication',
        title: 'Reports',
        type: 'collapse',
        icon: 'ti ti-file-text',
        children: []
      },
      {
        id: 'Authentication',
        title: 'Charts',
        type: 'collapse',
        icon: 'ti ti-chart-pie',
        children: []
      },
      {
        id: 'Authentication',
        title: 'Tables',
        type: 'collapse',
        icon: 'ti ti-table',
        children: []
      }
    ]
  },
  {
    id: 'elements',
    title: 'Tasks/Projects',
    type: 'group',
    icon: 'icon-  ',
    children: [
      {
        id: 'typography',
        title: 'Projects',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'ti ti-folder'
      },
      {
        id: 'color',
        title: 'Tasks',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
        icon: 'ti ti-checklist'
      },
      
    ]
  },
  {
    id: 'other',
    title: 'Profile',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'user-profile-page',
        title: 'User profile Page',
        type: 'item',
        url: '/profile/',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
    
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
