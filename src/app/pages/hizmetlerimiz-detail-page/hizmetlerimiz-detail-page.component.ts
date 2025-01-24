import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hizmetlerimiz-detail-page',
  templateUrl: './hizmetlerimiz-detail-page.component.html',
  styleUrls: ['./hizmetlerimiz-detail-page.component.scss']
})
export class HizmetlerimizDetailPageComponent implements OnInit {
  title: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the route parameter
    this.title = this.route.snapshot.paramMap.get('title');
  }
}
