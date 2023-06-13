import { Controller, Get,Body ,Post} from '@nestjs/common';
import { AppService } from './app.service';
import { JSon } from './dto/Json.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return this.appService.getHello();
  }
  
  @Get("getdata")
  getdata(){
    return this.appService.getdata();
  }

  @Post("addNew")
  addNew(@Body()dto:any){
    return this.appService.addNew(dto);
  }
}
