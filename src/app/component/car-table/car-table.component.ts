import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Page } from '../../../model/page.model';
import { Car } from '../../../model/car/car.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-table',
  imports: [MatTableModule, MatPaginatorModule, RouterModule, CommonModule],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.scss'
})
export class CarTableComponent implements OnChanges {

  @Input() cars: Page<Car> = {} as Page<Car>;
  @Output() pageChange = new EventEmitter<{ page: number, size: number }>();

  dataSource: MatTableDataSource<Car> = new MatTableDataSource<Car>();
  displayedColumns: string[] = ['id', 'placa', 'empresa', 'tipo', 'vencimento'];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cars'] && this.cars.content) {
      this.dataSource.data = this.cars.content;
      console.log("Tabela atualizada com dados", this.cars);
    }
  }

  onFindByCarsPage(event: PageEvent): void {
    console.log("Mudança de página detectada no paginator:", event);
    this.pageChange.emit({ page: event.pageIndex, size: event.pageSize });
  }
}
