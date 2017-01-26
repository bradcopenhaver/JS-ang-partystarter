import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PartyDetailComponent} from './party-detail/party-detail.component';
import { AddPartyComponent } from './add-party/add-party.component';
import { AdminComponent }   from './admin/admin.component';
import { EditPartyComponent } from './edit-party/edit-party.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'party-detail/:id',
    component: PartyDetailComponent
  },
  {
    path: 'add-party',
    component: AddPartyComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
