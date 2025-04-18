import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopNavbar from './components/navigation/TopNavbar';
import Sidebar from './components/navigation/Sidebar';
import ClassesPage from './pages/ClassesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisciplinesPage from './pages/DisciplinesPage';
import './styles/main.css';
import ClassesEnCour from './pages/ClassesEnCour';
import ProgrammeSecondeMaths from './data/ProgrammeSecondeMaths';
import ProgrammeTerminalePhysique_3 from './data/ProgrammeTerminalePhysique_3';
import ProgrammeTerminaleMaths_B from './data/ProgrammeTerminaleMaths_B';
import ProgrammeSecondeMathsMRC from './data/ProgrammeSecondeMathsMRC';
import ProgrammeSecondePhysique from './data/ProgrammeSecondePhysique';
import ProgrammeCAPMaths from './data/ProgrammeCAPMaths';
import ProgrammeCAPPhysique from './data/ProgrammeCAPPhysique';
import CCFPage from './pages/CCFPage';
import CCFEngraisLiquide from './pages/CCF/CCFEngraisLiquide';
import ProgrammeNotFound from './components/ProgrammeNotFound';
import StatUneVariableSeconde from './pages/Maths/seconde/statistiques/statistiques/StatUneVariableSeconde';
import StatUneVariableAct2 from './pages/Maths/seconde/statistiques/statistiques/StatUneVariableAct2';
import StatUneVariableAct3 from './pages/Maths/seconde/statistiques/statistiques/StatUneVariableAct3';
import CCF2ToBM from './pages/CCF/CCF2ToBM';
import BookExtern from './pages/bookextern';
import ChapitreActivitiesPage from './pages/ChapitreActivitiesPage';
import EquationsPremierDegre from './pages/Maths/seconde/algebre/EquationsPremierDegre';
import FonctionsAffines from './pages/Maths/seconde/algebre/FonctionsAffines';
import GeomAct3Quellogochoisir from './pages/Maths/seconde/geometrie/GeomAct3Quellogochoisir';
import GeomAct4Thales from './pages/Maths/seconde/geometrie/GeomAct4Thales';
import GeometrieAct1 from './pages/Maths/seconde/geometrie/GeometrieAct1';
import Chapitre9pythagor from './pages/Maths/seconde/geometrie/Chapitre9pythagor';
import EquationSolver from './components/Outils/EquationSolver';
import TPSon from './pages/SciencePhysiqueChimie/seconde/Acoustique/TPSon';
import GeometryCalculator from './components/Outils/GeometryCalculator';
import Act1Proba from './pages/Maths/seconde/statistiques/probabilités/Act1Proba';
import Act2proba from './pages/Maths/seconde/statistiques/probabilités/Act2proba';
import Calculator from './components/Outils/Calculator';
import CalculatorPage from './components/Outils/CalculatorPage';
import TP1Optique from './pages/SciencePhysiqueChimie/seconde/Optique/TP1Optique';
import TP2Optique from './pages/SciencePhysiqueChimie/seconde/Optique/TP2Optique';
import GeomAct2 from './pages/Maths/seconde/geometrie/GeomAct2';
import FonctionCarre from './pages/Maths/seconde/algebre/FonctionCarre';
import EquationsPremierDegreTest from './pages/Maths/seconde/algebre/EquationsPremierDegreTest';
import RappelVecteur from "./pages/Maths/Terminale/geometrie/RappelVecteur";
import Act1GeometrieVecteur from "./pages/Maths/Terminale/geometrie/Act1GeometrieVecteur";
import Act2Geometrie from "./pages/Maths/Terminale/geometrie/Act2Geometrie";

// import SequencesPage from "./pages/SequencesPage";


function App() {
    return (<Router>
        <div className="app-layout">
            <TopNavbar/>
            <div className="main-content">
                <Sidebar/>
                <div className="page-content">
                    <Routes>
                        <Route path="/classes" element={<ClassesPage/>}/>
                        <Route path="/disciplines" element={<DisciplinesPage/>}/>
                        <Route
                            path="/disciplines/:discipline/classes"
                            element={<ClassesEnCour/>}
                        />

                        {/* Routes pour les programmes */}
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths"
                            element={<ProgrammeSecondeMaths/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMathsMRC"
                            element={<ProgrammeSecondeMathsMRC/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMaths_B"
                            element={<ProgrammeTerminaleMaths_B/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeCAPMaths"
                            element={<ProgrammeCAPMaths/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique"
                            element={<ProgrammeSecondePhysique/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeTerminalePhysique_3"
                            element={<ProgrammeTerminalePhysique_3/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeCAPPhysique"
                            element={<ProgrammeCAPPhysique/>}
                        />

                        {/* Routes pour les séquences et activités */}
                        <Route
                            path="/programmes/:discipline/:classId/:programmeType/sequences/:chapitreId"
                            element={<ChapitreActivitiesPage/>}
                        />

                        {/* Routes spécifiques pour les activités */}
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/statistiques/stat-une-variable"
                            element={<StatUneVariableSeconde/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/statistiques/stat-une-variable2"
                            element={<StatUneVariableAct2/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/statistiques/stat-une-variable3"
                            element={<StatUneVariableAct3/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act1Proba"
                            element={<Act1Proba/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act2proba"
                            element={<Act2proba/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/equations-premier-degre"
                            element={<EquationsPremierDegre/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/equations-second-degre-test"
                            element={<EquationsPremierDegreTest/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/fonctions-affines"
                            element={<FonctionsAffines/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/fonction-carre"
                            element={<FonctionCarre/>}
                        />
                        <Route
                            path={'/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/GeometrieAct1'}
                            element={<GeometrieAct1/>}
                        />
                        <Route
                            path={'/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/GeometrieAct2'}
                            element={<GeomAct2/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/pythagore"
                            element={<GeomAct3Quellogochoisir/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/thales"
                            element={<GeomAct4Thales/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/chapitre9pythagor"
                            element={<Chapitre9pythagor/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/acoustique/tp-son"
                            element={<TPSon/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/optique/tp-optique"
                            element={<TP1Optique/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/optique/tp-optique2"
                            element={<TP2Optique/>}
                        />
                        <Route path="/calculator" element={<CalculatorPage/>}/>
                        {/*<Route*/}
                        {/*    path="/programmes/:discipline/:classId/:programmeType/sequences"*/}
                        {/*    element={<SequencesPage/>}*/}
                        {/*/>*/}
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMaths_B/activites/geometrie/rappel-vecteur"
                            element={<RappelVecteur/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMaths_B/activites/geometrie/act1-pylones"
                            element={<Act1GeometrieVecteur/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMaths_B/activites/geometrie/act2-telepherique"
                            element={<Act2Geometrie/>}
                        />
                        {/* Routes pour les CCF */}
                        <Route path="/ccf" element={<CCFPage/>}/>
                        <Route path="/ccf/:ccfId" element={<CCF2ToBM/>}/>
                        <Route
                            path="/ccf/engrais-liquide"
                            element={<CCFEngraisLiquide/>}
                        />

                        {/* Autres routes */}
                        <Route path="/LIVRES" element={<BookExtern/>}/>
                        <Route
                            path="/programme-non-trouve"
                            element={<ProgrammeNotFound/>}
                        />
                        <Route path="/equation-solver" element={<EquationSolver/>}/>
                        <Route
                            path="/geometry-calculator"
                            element={<GeometryCalculator/>}
                        />

                        {/* Route par défaut */}
                        <Route path="/" element={<ClassesPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    </Router>);
}

export default App;
