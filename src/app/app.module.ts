import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';

//Rutas
import { app_routing } from './app.routes';
import { AnimalesComponent } from './components/animales/animales.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { AguilillaComponent } from './components/animales/aguililla/aguililla.component';
import { AntilopeComponent } from './components/animales/antilope/antilope.component';
import { BuitreComponent } from './components/animales/buitre/buitre.component';
import { CabraComponent } from './components/animales/cabra/cabra.component';
import { CacatuaComponent } from './components/animales/cacatua/cacatua.component';
import { CapibaraComponent } from './components/animales/capibara/capibara.component';
import { CaracaraComponent } from './components/animales/caracara/caracara.component';
import { ChachalacaComponent } from './components/animales/chachalaca/chachalaca.component';
import { CiervoComponent } from './components/animales/ciervo/ciervo.component';
import { GatoComponent } from './components/animales/gato/gato.component';
import { GuacamayaComponent } from './components/animales/guacamaya/guacamaya.component';
import { GuanacoComponent } from './components/animales/guanaco/guanaco.component';
import { JaguarComponent } from './components/animales/jaguar/jaguar.component';
import { LemurComponent } from './components/animales/lemur/lemur.component';
import { LeonComponent } from './components/animales/leon/leon.component';
import { LiebreComponent } from './components/animales/liebre/liebre.component';
import { MonoComponent } from './components/animales/mono/mono.component';
import { OryxComponent } from './components/animales/oryx/oryx.component';
import { OsoComponent } from './components/animales/oso/oso.component';
import { PanteraComponent } from './components/animales/pantera/pantera.component';
import { PavaComponent } from './components/animales/pava/pava.component';
import { TigreblancoComponent } from './components/animales/tigreblanco/tigreblanco.component';
import { TigrilloComponent } from './components/animales/tigrillo/tigrillo.component';
import { TortugaComponent } from './components/animales/tortuga/tortuga.component';
import { FelinosComponent } from './components/atracciones/felinos/felinos.component';
import { EstepaComponent } from './components/atracciones/estepa/estepa.component';
import { MonosComponent } from './components/atracciones/monos/monos.component';
import { AviarioComponent } from './components/atracciones/aviario/aviario.component';
import { TaigaComponent } from './components/atracciones/taiga/taiga.component';
import { HerpetarioComponent } from './components/atracciones/herpetario/herpetario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtraccionesComponent,
    AnimalesComponent,
    AcercaComponent,
    AguilillaComponent,
    AntilopeComponent,
    BuitreComponent,
    CabraComponent,
    CacatuaComponent,
    CapibaraComponent,
    CaracaraComponent,
    ChachalacaComponent,
    CiervoComponent,
    GatoComponent,
    GuacamayaComponent,
    GuanacoComponent,
    JaguarComponent,
    LemurComponent,
    LeonComponent,
    LiebreComponent,
    MonoComponent,
    OryxComponent,
    OsoComponent,
    PanteraComponent,
    PavaComponent,
    TigreblancoComponent,
    TigrilloComponent,
    TortugaComponent,
    FelinosComponent,
    EstepaComponent,
    MonosComponent,
    AviarioComponent,
    TaigaComponent,
    HerpetarioComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
