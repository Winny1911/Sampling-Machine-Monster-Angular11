import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encerramento',
  templateUrl: './encerramento.component.html',
  styleUrls: ['./encerramento.component.css']
})
export class EncerramentoComponent implements OnInit {

  constructor() { 
    this.myAngularxQrCode = 'Your QR code data string';
  }

  public myAngularxQrCode: string = null;

  ngOnInit(): void {
  }

}
