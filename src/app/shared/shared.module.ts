import { NgModule } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

const ngZorro = [
    NzSelectModule,
    NzRateModule,
    NzPaginationModule,
    NzDropDownModule,
    NzBadgeModule
]

@NgModule({
    imports: [],
    exports: [
        ...ngZorro
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
