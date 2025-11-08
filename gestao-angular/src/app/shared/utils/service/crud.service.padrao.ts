import {HttpClient} from "@angular/common/http";
import {environment} from "../../../enviroment";

export class CrudServicePadrao<T,F> {

    url: string = environment.BASE_URL

    constructor(protected http: HttpClient, private urlPrefix: string) {
        this.url = this.url + urlPrefix;
    }

    getAll() {
        return this.http.get<T[]>(`${this.url}` ,{observe: 'response'})
    }

  getByFiltro(filtro?: F) {
    return this.http.post<T[]>(`${this.url}/listagem`, filtro ?? {}, { observe: 'response' });
  }

    getById(id: number) {
        return this.http.get<T>(`${this.url}/${id}`, {observe: 'response'})
    }

    save(model: T) {
        return this.http.post(`${this.url}`, model, {observe: 'response'})
    }

    update(id: string, model: T) {
        return this.http.put(`${this.url}/${id}`, model , {observe: 'response'})
    }

    delete(id: string) {
        return this.http.delete(`${this.url}/${id}` , {observe: 'response'})
    }
}
