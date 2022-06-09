import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RespuestaService } from 'src/app/services/respuesta.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  createRespuesta: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private _respuestaService: RespuestaService,
              private router: Router,
              private toastr: ToastrService
              ) { 
                this.createRespuesta = this.fb.group({

                  area: ['', Validators.required],
                  sexo: ['', Validators.required],
                  edad: ['', Validators.required],
                  civil: ['', Validators.required],
                  antiguedad: ['', Validators.required],
                  escolaridad: ['', Validators.required],
                  hora1: ['', Validators.required],
                  hora2: ['', Validators.required],
                  plaza: ['', Validators.required],
                  
                  discriminacion: ['', Validators.required],
                  discriminacion1: ['', Validators.required],
                  discriminacion2: ['', Validators.required],
                  discriminacion3: ['', Validators.required],
                  discriminacion4: ['', Validators.required],

                  reclutamiento1: ['', Validators.required],
                  reclutamiento2: ['', Validators.required],
                  reclutamiento3: ['', Validators.required],
                  reclutamiento4: ['', Validators.required],

                  capacitacion1: ['', Validators.required],
                  capacitacion2: ['', Validators.required],
                  capacitacion3: ['', Validators.required],
                  capacitacion4: ['', Validators.required],

                  permanencia1: ['', Validators.required],
                  permanencia2: ['', Validators.required],
                  permanencia3: ['', Validators.required],
                  permanencia4: ['', Validators.required],
                  permanencia5: ['', Validators.required],
                  permanencia6: ['', Validators.required],

                  corresponsabilidad1: ['', Validators.required],
                  corresponsabilidad2: ['', Validators.required],
                  corresponsabilidad3: ['', Validators.required],
                  corresponsabilidad4: ['', Validators.required],
                  corresponsabilidad5: ['', Validators.required],
                  corresponsabilidad6: ['', Validators.required],
                  corresponsabilidad7: ['', Validators.required],
                  corresponsabilidad8: ['', Validators.required],
                  corresponsabilidad9: ['', Validators.required],

                  clima1: ['', Validators.required],
                  clima2: ['', Validators.required],
                  clima3: ['', Validators.required],
                  clima4: ['', Validators.required],
                  clima5: ['', Validators.required],
                  clima6: ['', Validators.required],
                  clima7: ['', Validators.required],
                  clima8: ['', Validators.required],
                  clima9: ['', Validators.required],
                  clima10: ['', Validators.required],
                  clima11: ['', Validators.required],
                  clima12: ['', Validators.required],
                  clima13: ['', Validators.required],
                  clima14: ['', Validators.required],

                  acoso1: ['', Validators.required],
                  acoso2: ['', Validators.required],
                  acoso3: ['', Validators.required],
                  acoso4: ['', Validators.required],
                  acoso5: ['', Validators.required],
                  acoso6: ['', Validators.required],
                  acoso7: ['', Validators.required],
                  acoso8: ['', Validators.required],
                  
                  accesibilidad1: ['', Validators.required],
                  accesibilidad2: ['', Validators.required],
                  accesibilidad3: ['', Validators.required],
                  accesibilidad4: ['', Validators.required],
                  accesibilidad5: ['', Validators.required],

                  respeto1: ['', Validators.required],
                  respeto2: ['', Validators.required],

                  condiciones1: ['', Validators.required],
                  condiciones2: ['', Validators.required],
                  condiciones3: ['', Validators.required],
                  condiciones4: ['', Validators.required],
      
                })
               }

  ngOnInit(): void {
  }

  agregarRespuesta(){

    this.submitted = true;

    if(this.createRespuesta.invalid){
      return;
    }

    const respuesta: any = {
      
      area: this.createRespuesta.value.area,
      sexo: this.createRespuesta.value.sexo,
      edad: this.createRespuesta.value.edad,
      civil: this.createRespuesta.value.civil,
      antiguedad: this.createRespuesta.value.antiguedad,
      escolaridad: this.createRespuesta.value.escolaridad,
      hora1: this.createRespuesta.value.hora1,
      hora2: this.createRespuesta.value.hora2,
      plaza: this.createRespuesta.value.plaza,

      discriminacion: this.createRespuesta.value.discriminacion,
      discriminacion1: this.createRespuesta.value.discriminacion1,
      discriminacion2: this.createRespuesta.value.discriminacion2,
      discriminacion3: this.createRespuesta.value.discriminacion3,
      discriminacion4: this.createRespuesta.value.discriminacion4,

      reclutamiento1: this.createRespuesta.value.reclutamiento1,
      reclutamiento2: this.createRespuesta.value.reclutamiento2,
      reclutamiento3: this.createRespuesta.value.reclutamiento3,
      reclutamiento4: this.createRespuesta.value.reclutamiento4,

      capacitacion1: this.createRespuesta.value.capacitacion1,
      capacitacion2: this.createRespuesta.value.capacitacion2,
      capacitacion3: this.createRespuesta.value.capacitacion3,
      capacitacion4: this.createRespuesta.value.capacitacion4,

      permanencia1: this.createRespuesta.value.permanencia1,
      permanencia2: this.createRespuesta.value.permanencia2,
      permanencia3: this.createRespuesta.value.permanencia3,
      permanencia4: this.createRespuesta.value.permanencia4,
      permanencia5: this.createRespuesta.value.permanencia5,
      permanencia6: this.createRespuesta.value.permanencia6,

      corresponsabilidad1: this.createRespuesta.value.corresponsabilidad1,
      corresponsabilidad2: this.createRespuesta.value.corresponsabilidad2,
      corresponsabilidad3: this.createRespuesta.value.corresponsabilidad3,
      corresponsabilidad4: this.createRespuesta.value.corresponsabilidad4,
      corresponsabilidad5: this.createRespuesta.value.corresponsabilidad5,
      corresponsabilidad6: this.createRespuesta.value.corresponsabilidad6,
      corresponsabilidad7: this.createRespuesta.value.corresponsabilidad7,
      corresponsabilidad8: this.createRespuesta.value.corresponsabilidad8,
      corresponsabilidad9: this.createRespuesta.value.corresponsabilidad9,

      clima1: this.createRespuesta.value.clima1,
      clima2: this.createRespuesta.value.clima2,
      clima3: this.createRespuesta.value.clima3,
      clima4: this.createRespuesta.value.clima4,
      clima5: this.createRespuesta.value.clima5,
      clima6: this.createRespuesta.value.clima6,
      clima7: this.createRespuesta.value.clima7,
      clima8: this.createRespuesta.value.clima8,
      clima9: this.createRespuesta.value.clima9,
      clima10: this.createRespuesta.value.clima10,
      clima11: this.createRespuesta.value.clima11,
      clima12: this.createRespuesta.value.clima12,
      clima13: this.createRespuesta.value.clima13,
      clima14: this.createRespuesta.value.clima14,

      acoso1: this.createRespuesta.value.acoso1,
      acoso2: this.createRespuesta.value.acoso2,
      acoso3: this.createRespuesta.value.acoso3,
      acoso4: this.createRespuesta.value.acoso4,
      acoso5: this.createRespuesta.value.acoso5,
      acoso6: this.createRespuesta.value.acoso6,
      acoso7: this.createRespuesta.value.acoso7,
      acoso8: this.createRespuesta.value.acoso8,

      accesibilidad1: this.createRespuesta.value.accesibilidad1,
      accesibilidad2: this.createRespuesta.value.accesibilidad2,
      accesibilidad3: this.createRespuesta.value.accesibilidad3,
      accesibilidad4: this.createRespuesta.value.accesibilidad4,
      accesibilidad5: this.createRespuesta.value.accesibilidad5,

      respeto1: this.createRespuesta.value.respeto1,
      respeto2: this.createRespuesta.value.respeto2,

      condiciones1: this.createRespuesta.value.condiciones1,
      condiciones2: this.createRespuesta.value.condiciones2,
      condiciones3: this.createRespuesta.value.condiciones3,
      condiciones4: this.createRespuesta.value.condiciones4

    }
    
    this._respuestaService.agregarRespuesta(respuesta).then(() => {
      this.toastr.success('Su respuesta se registro con exito', 'Respuesta registrada', 
        {positionClass: 'toast-bottom-right'}
      );
      this.loading = false;
      this.router.navigate(['/enviadas']);
    }).catch(error =>{
      console.log(error);
      this.loading = false;
    })

  }

}
