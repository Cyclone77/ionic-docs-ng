import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
    {
        path: '',
        component: AccordionComponent,
    },
];

@NgModule({
    declarations: [AccordionComponent],
    imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class AccordionModule {}
