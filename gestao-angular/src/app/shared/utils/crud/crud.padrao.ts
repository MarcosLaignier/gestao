import {Directive, Injector, Input} from "@angular/core";
import {BaseCrudPadrao} from "./base.crud.padrao";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import notify from "devextreme/ui/notify";
import {CrudServicePadrao} from "../service/crud.service.padrao";
import {ActivatedRoute, Router} from "@angular/router";


@Directive()
export abstract class CrudPadrao<T,F> extends BaseCrudPadrao{

  @Input()
  filter:F;

  @Input()
  model:T;

  dataSource: T[] = [];

  getFilter(): any {
    return this.filter;
  }

  setFilter(f: F) {
    this.filter = f;
  }

  getModel(): any {
    return this.model;
  }

  setModel(m: T) {
    this.model = m;
  }

  getDataSource(): T[] {
    return this.dataSource;
  }


  /** ----------- INICIO DE METODOS ----------- */


  /** Metodo chamado antes da execução do save,
   * Pode ser usado para alterar algum dado do model antes de invocar o save*/

  beforeDoSave(): Observable<any> | null {
    return null;
  }

  /** Metodo chamado depois da execução do save,*/
  afterDoSave() {

  }

  /** Metodo chamado para o Save */
  doSave(model:any) {
    this.beforeDoSave();
    if(this.validateSave()){
      this.getMainService().save(model).subscribe(res => {
        if (res.ok) {
          notify('Salvo com sucesso', 'success', 3000);
        }
        return res;
      },error => {
        notify('Algo deu errado ao tentar salvar', 'error', 3000);
        return error;

      })
    }
  }

  /** Metodo chamado depois do beforeSave e antes da execução do Save */

  validateSave():Boolean{
    return true;
  }


  /** Metodo chamado antes da execução do filtro */

  beforeDoFilter() {

  }

  /** Metodo chamado apos a execução do filtro */
  afterDoFilter() {

  }

  /** Metodo de Filtro onde contem o beforeDoFilter antes da execução */

  doFilter(){
    this.beforeDoFilter();
    return this.getMainService().getAll().subscribe(res => {
      if(res.body){
        this.dataSource = res.body
      }

    });
  }

  /** Metodo do botao Clear */
  doClear(){

  }

  getByidRoute(id:string, modelCrud:T){
    this.navigateToEdit(false,id);
    return this.getMainService().getById(id).subscribe(resp =>{
      if(resp.body){
        this.model = resp.body;
        console.log(this.model)
      }
    })
  }

  /** Metodo responsavel por navegar ate a rota de edit diante da rota atual
   *
   */
  navigateToEdit(novo:boolean, idEdicao:any) {
    // Obtendo a rota atual
    const currentRoute = this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    // Montando a nova rota

    let newRoute = `${currentRoute}`
    if(!this.router.url.split('/').includes('edit')){
      newRoute += `/edit`;
    }
    if(!novo){
      this.activatedRoute.paramMap.subscribe(params => {
        const idRota = params.get('id'); // Tentativa de pegar o 'id' da rota

        if (!idRota) {
          newRoute += `/${idEdicao}`;

        } else {
        }
      })
    }

    // Navegando para a nova rota
    this.router.navigate([newRoute]);
  }

  protected override doOnInit() {

    let isEditing: boolean = this.router.url.split('/').includes('edit');
if(isEditing){

}
    super.doOnInit();
  }





  /** ----------- METODO PRINCIPAL ----------- */

  /** Metodo onde recebera o service da classe que extende e
   * fara sera responsavel por executar os metodos criados acima */

  public getMainService(){
    return new CrudServicePadrao<T,F>(this.http,`/${this.urlPrefix}`);
  }



  /** ----------- Construtor ----------- */


  constructor( private _injector:Injector,
               private urlPrefix:string,
               protected http: HttpClient,
               protected activatedRoute: ActivatedRoute,
               protected router: Router) {
    super(_injector)
  }
}
