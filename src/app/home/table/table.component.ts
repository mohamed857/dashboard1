import { Component, OnInit } from '@angular/core';
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, DropdownModule, FormsModule, TooltipModule,ContextMenuModule,MenuModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {
  products = [
    {
      id: '1', name: 'شنظة سفر متميزة', phone: '123456789', img: 'https://5.imimg.com/data5/SELLER/Default/2020/8/ZU/WA/AP/58788518/bag.jpeg', price: '$3,000',
      qun: '30', state: 0, Category: 'مقص شعر', catIcon: 'pi pi-mobile', tax: '%14', minimum: '50', discount: '$200', rate: ''
    },
    {
      id: '2', name: 'شنظة سفر متميزة', phone: '123456789', img: 'https://5.imimg.com/data5/SELLER/Default/2020/8/ZU/WA/AP/58788518/bag.jpeg', price: '$3,000',
      qun: '30', state: 1, Category: 'مقص شعر', catIcon: 'pi pi-mobile', tax: '%14', minimum: '50', discount: '$200', rate: ''
    },
    {
      id: '3', name: 'شنظة سفر متميزة', phone: '123456789', img: 'https://5.imimg.com/data5/SELLER/Default/2020/8/ZU/WA/AP/58788518/bag.jpeg', price: '$3,000',
      qun: '30', state: 2, Category: 'مقص شعر', catIcon: 'pi pi-mobile', tax: '%14', minimum: '50', discount: '$200', rate: ''
    },
    {
      id: '4', name: 'شنظة سفر متميزة', phone: '123456789', img: 'https://5.imimg.com/data5/SELLER/Default/2020/8/ZU/WA/AP/58788518/bag.jpeg', price: '$3,000',
      qun: '30', state: 0, Category: 'مقص شعر', catIcon: 'pi pi-mobile', tax: '%14', minimum: '50', discount: '$200', rate: ''
    },
    {
      id: '5', name: 'شنظة سفر متميزة', phone: '123456789', img: 'https://5.imimg.com/data5/SELLER/Default/2020/8/ZU/WA/AP/58788518/bag.jpeg', price: '$3,000',
      qun: '30', state: 1, Category: 'مقص شعر', catIcon: 'pi pi-mobile', tax: '%14', minimum: '50', discount: '$200', rate: ''
    },
    {
      id: '6', name: 'شنظة سفر متميزة', phone: '123456789', img: 'https://5.imimg.com/data5/SELLER/Default/2020/8/ZU/WA/AP/58788518/bag.jpeg', price: '$3,000',
      qun: '30', state: 2, Category: 'مقص شعر', catIcon: 'pi pi-mobile', tax: '%14', minimum: '50', discount: '$200', rate: ''
    }
  ]

  cities  = [
    
    { label: 'إضافة طلب شراء', icon: 'pi pi-plus-circle'},
    { label: 'تعطيل المنتج', icon: 'pi pi-pause'},
    { label: 'حذف المنتج',  icon: 'pi pi-trash'},
  ];

  selectedCity: any | undefined;

  constructor() { }
  ngOnInit() {
    // this.products = data;
   
  }
}
