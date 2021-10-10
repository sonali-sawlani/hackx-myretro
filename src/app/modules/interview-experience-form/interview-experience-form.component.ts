import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InterviewExperienceService } from 'src/app/services/interviewexperience.service';

@Component({
  selector: 'app-interview-experience-form',
  templateUrl: './interview-experience-form.component.html',
  styleUrls: ['./interview-experience-form.component.css']
})
export class InterviewExperienceFormComponent implements OnInit {

 // items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    company: '',
    role: '',
    yoe:'',
    techstack:'',
    interviewquestion: ''

  });

  constructor(
    //private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}



  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
