import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';



@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
})
export class HomeEditComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
