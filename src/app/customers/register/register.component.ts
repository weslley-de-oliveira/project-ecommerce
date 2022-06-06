import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/customers/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {return this.formGroup.controls} 

  register() {
    if (this.formGroup.invalid) {
      alert('Formulário inválido. Por Favor, revise os campos.')
    } else {
      const data = this.formGroup.value;
      this.registerService.register(data).subscribe((data:any) => {
        console.log(data);
      });
      alert('Cadastro realizado com sucesso!!!');
      this.router.navigateByUrl('/login');
    }
    
  }

}
