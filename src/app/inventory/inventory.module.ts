import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { InventorydashboardComponent } from './inventorydashboard/inventorydashboard.component';
import { ProvincialinventoryComponent } from './provincialinventory/provincialinventory.component';
import { ProviancialInventoryKwekweComponent } from './proviancial-inventory-kwekwe/proviancial-inventory-kwekwe.component';


@NgModule({
  declarations: [CentralInventoryComponent,
    InventorydashboardComponent,
    ProvincialinventoryComponent,
    ProviancialInventoryKwekweComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,       
    ConfirmDialogModule,
    ToolbarModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class InventoryModule { }
