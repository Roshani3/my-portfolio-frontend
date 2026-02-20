import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [ContactService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() email: string = '';
  @Input() github: string = '';
  @Input() linkedin: string = '';

  contactForm: FormGroup;
  isSubmitting = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.status = 'idle';

    const formValue = this.contactForm.value;

    const payload = {
      name: formValue.name,
      email: formValue.email,
      message: formValue.message,
      subject: `New Portfolio Inquiry from ${formValue.name}`
    };

    console.log('Sending payload:', payload);

    this.contactService.sendMessage(payload).subscribe({
      next: (response) => {
        console.log('Success response:', response);
        this.status = 'success';
        this.contactForm.reset();
        this.isSubmitting = false;

        setTimeout(() => {
          this.status = 'idle';
        }, 5000);
      },
      error: (error) => {
        console.error('Error occurred:', error);
        this.status = 'error';
        this.isSubmitting = false;
      }
    });
  }
}
