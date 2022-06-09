import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private firestore: AngularFirestore) { }

  agregarRespuesta(respuesta: any): Promise <any>{
    return this.firestore.collection('respuestas').add(respuesta);
  }

}
