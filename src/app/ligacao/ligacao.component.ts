import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-ligacao',
  templateUrl: './ligacao.component.html',
  styleUrls: ['./ligacao.component.css']
})
export class LigacaoComponent implements OnInit {

  constructor(private router: Router, private sanitizer: DomSanitizer) { }
  test
  ngOnInit(): void {
    this.test = this.transform("https://meet.jit.si/aaa")
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goToFinish(){
    this.router.navigate(['/encerramento']);
  }
}
