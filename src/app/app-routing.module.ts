import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InterviewExperienceFormComponent } from './modules/interview-experience-form/interview-experience-form.component';

const routes: Routes = [
  {
    path:'form', component:InterviewExperienceFormComponent}
];

@NgModule({

  declarations:[
    InterviewExperienceFormComponent],

  imports: [
    RouterModule.forRoot(routes, { enableTracing: false,useHash: true }),
    FormsModule,
    ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
