import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    exports: [
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatRadioModule,
        MatToolbarModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatProgressSpinnerModule]

})
export class AngularMaterialModule { }
