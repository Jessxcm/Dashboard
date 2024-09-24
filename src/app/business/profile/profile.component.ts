import { Component } from '@angular/core';
import {jsPDF } from 'jspdf';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  

  generatePDF(){
    const doc = new jsPDF();
  }


}
