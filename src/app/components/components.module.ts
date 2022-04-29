import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsComponent } from './components.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
    },
    {
        path: 'accordion',
        loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule),
    },
];

@NgModule({
    declarations: [ComponentsComponent],
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
})
export class ComponentsModule {}
