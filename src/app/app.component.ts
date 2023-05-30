import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MysseService } from './mysse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularjson';
  constructor(
    private mysse: MysseService,
    private cd: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.mysse.getServerSentEvent('http://localhost:3000/my-endpoint').subscribe((res: any) => {
      console.log('asdfasdfdasf', res);
      this.title = res.msg;
      this.cd.detectChanges();
    })
  }
}
