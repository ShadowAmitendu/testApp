import { Routes } from '@angular/router';
import { Employees } from './employees/employees';
import { Admin } from './admin/admin';
import { Ifelse } from './controlFlow/ifelse/ifelse';
import { For } from './controlFlow/for/for';
import { Switch } from './controlFlow/switch/switch';
import { Pipe } from './pipe/pipe';
import { Template } from './forms/template/template';
import { Reactive } from './forms/reactive/reactive';
import { Requests } from './http/requests/requests';
import { Lifecycle } from './lifecycle/lifecycle';
import { Ngcontent } from './ngcontent/ngcontent';
import { Viewchild } from './viewchild/viewchild';

export const routes: Routes = [
  {
    path: 'emp',
    component: Employees,
  },
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'controlFlow/ifElse',
    component: Ifelse,
  },
  {
    path: 'controlFlow/for',
    component: For,
  },
  {
    path: 'controlFlow/switch',
    component: Switch,
  },
  {
    path: 'pipes',
    component: Pipe,
  },

  {
    path: 'forms/template',
    component: Template,
  },
  {
    path: 'forms/reactive',
    component: Reactive,
  },
  {
    path: 'http/requests',
    component: Requests,
  },
  {
    path: 'lifeCycle',
    component: Lifecycle,
  },
  {
    path: 'ngContent',
    component: Ngcontent,
  },
  {
    path: 'viewChild',
    component: Viewchild,
  },
];
