import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AcercaComponent } from './components/acerca/acerca.component';
/* ANIMALES */
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
/* ATRACCIONES */
import { FelinosComponent } from './components/atracciones/felinos/felinos.component';
import { MonosComponent } from './components/atracciones/monos/monos.component';
import { AviarioComponent } from './components/atracciones/aviario/aviario.component';
import { EstepaComponent } from './components/atracciones/estepa/estepa.component';
import { HerpetarioComponent } from './components/atracciones/herpetario/herpetario.component';
import { TaigaComponent } from './components/atracciones/taiga/taiga.component';


const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'atracciones', component: AtraccionesComponent},
    {path: 'animales', component: AnimalesComponent},
    {path: 'acerca', component: AcercaComponent},
    /* animalitos */
    {path: 'aguililla', component: AguilillaComponent},
    {path: 'antilope', component: AntilopeComponent},
    {path: 'buitre', component: BuitreComponent},
    {path: 'cabra', component: CabraComponent},
    {path: 'cacatua', component: CacatuaComponent},
    {path: 'capibara', component: CapibaraComponent},
    {path: 'caracara', component: CaracaraComponent},
    {path: 'chachalaca', component: ChachalacaComponent},
    {path: 'ciervo', component: CiervoComponent},
    {path: 'gato', component: GatoComponent},
    {path: 'guacamaya', component: GuacamayaComponent},
    {path: 'guanaco', component: GuanacoComponent},
    {path: 'jaguar', component: JaguarComponent},
    {path: 'lemur', component: LemurComponent},
    {path: 'leon', component: LeonComponent},
    {path: 'liebre', component: LiebreComponent},
    {path: 'mono', component: MonoComponent},
    {path: 'oryx', component: OryxComponent},
    {path: 'oso', component: OsoComponent},
    {path: 'pantera', component: PanteraComponent},
    {path: 'pava', component: PavaComponent},
    {path: 'tigreblanco', component: TigreblancoComponent},
    {path: 'tigrillo', component: TigrilloComponent},
    {path: 'tortuga', component: TortugaComponent},
    /* atracciones */
    {path: 'felinos', component: FelinosComponent},
    {path: 'monos', component: MonosComponent},
    {path: 'aviario', component: AviarioComponent},
    {path: 'estepa', component: EstepaComponent},
    {path: 'herpetario', component: HerpetarioComponent},
    {path: 'taiga', component: TaigaComponent},




    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const app_routing = RouterModule.forRoot(app_routes);