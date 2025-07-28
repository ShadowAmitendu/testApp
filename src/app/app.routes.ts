import { Routes } from '@angular/router';
import { Employees } from './employees/employees';
import { Admin } from './admin/admin';
import { Ifelse } from './controlFlow/ifelse/ifelse';
import { For } from './controlFlow/for/for';
import { Switch } from './controlFlow/switch/switch';
import { Pipe } from './pipe/pipe';
import { Template } from './forms/template/template';

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
];
