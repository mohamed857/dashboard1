import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ChartComponent } from "./chart/chart.component";
import { TableComponent } from "./table/table.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, ChartComponent, TableComponent]
})
export class HomeComponent {

}
