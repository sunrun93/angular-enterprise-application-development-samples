import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 导入HttpHeaders解决跨域

import { CategoryMsg } from './category'; // 导入新闻分类的包装类型
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // 新闻分类API地址
  //categoryApiUrl = 'https://api.xinwen.cn/news/category?signature=5c276aa9b88c3aca42f1e5453461b47b&access_key=R7kTDQi46gPmnOuw&timestamp=1542298262302';
  categoryApiUrl = '/news/category?' +
   'signature=6537eefc7c084d318e16eaff2d42c2e6&access_key=R7kTDQi46gPmnOuw&timestamp=1542299769028';

  // 注入HttpClient
  constructor(private http: HttpClient) { }

  // 指定参数类型CategoryMsg
  getCategoryData() {
    return this.http.get<CategoryMsg>(this.categoryApiUrl, 
      this.httpOptions); // 设置Http头
  }

  // 解决跨域访问资源
  private httpOptions: Object = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true',
  'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE', 'Content-Type': 'application/json' })
  }

  /*
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }
  */
}
