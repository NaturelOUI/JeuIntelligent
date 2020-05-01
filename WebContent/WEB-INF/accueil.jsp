<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Expires" content="0">
	
    <link rel="stylesheet" href="<c:url value="css/style.css"/>"/>
    
	

	
    <title>Bienvenue ! </title>
  </head>
  <body onresize="Page.adjustDivHeight(0)" >
    <%--
      <%@ include file="Bandeau/bandeau.jsp" %>
      
       --%>
    <div>
      <table>
        <tr>
          <td id="td1">
            <div id="joueurListe">
            <%--
              <div id="joueur1" class="joueur">
                <button id="btcache1" onclick="cacher(this.id)">X</button>
                Joueur 1 :
                <div class="txtEdit" id="nomJ1" contenteditable="true">
                  joueur 1
                </div>
              </div>
              
              <div id="joueur2" class="joueur">
                <button id="btcache2" onclick="cacher(this.id)">X</button>
                Joueur 2 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ2" contenteditable="true">
                  joueur 2
                </div>
              </div>
              <div id="joueur3" class="joueur">
                <button id="btcache3" onclick="cacher(this.id)">X</button>
                Joueur 3 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ3" contenteditable="true">
                  joueur 3
                </div>
              </div>
              
              <div id="joueur4" class="joueur">
                <button id="btcache4" onclick="cacher(this.id)">X</button>
                Joueur 4 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ4" contenteditable="true">
                  joueur 4
                </div>
              </div>
              <div id="joueur5" class="joueur">
                <button id="btcache5" onclick="cacher(this.id)">X</button>
                Joueur 5 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ5" contenteditable="true">
                  joueur 5
                </div>
              </div>
              <div id="joueur6" class="joueur">
                <button id="btcache6" onclick="cacher(this.id)">X</button>
                Joueur 6 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ6" contenteditable="true">
                  joueur 6
                </div>
              </div>
              <div id="joueur7" class="joueur">
                <button id="btcache7" onclick="cacher(this.id)">X</button>
                Joueur 7 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ7" contenteditable="true">
                  joueur 7
                </div>
              </div>
              <div id="joueur8" class="joueur">
                <button id="btcache8" onclick="cacher(this.id)">X</button>
                Joueur 8 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ8" contenteditable="true">
                  joueur 8
                </div>
              </div>
              <div id="joueur9" class="joueur">
                <button id="btcache9" onclick="cacher(this.id)">X</button>
                Joueur 9 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ9" contenteditable="true">
                  joueur 9
                </div>
              </div>
              <div id="joueur10" class="joueur">
                <button id="btcache10" onclick="cacher(this.id)">X</button>
                Joueur 10 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ10" contenteditable="true">
                  joueur 10
                </div>
              </div>
              <div id="joueur11" class="joueur">
                <button id="btcache11" onclick="cacher(this.id)">X</button>
                Joueur 11 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ11" contenteditable="true">
                  joueur 11
                </div>
              </div>
              <div id="joueur12" class="joueur">
                <button id="btcache12" onclick="cacher(this.id)">X</button>
                Joueur 12 :
                <pre> </pre>
                <div class="txtEdit" id="nomJ12" contenteditable="true">
                  joueur 12
                </div>
              </div>
              --%>
              <div id="ajouterJoueur">
                <button id="btAjouterJoueur" onclick="Page.addPlayer()">+</button>
              </div>
            </div>
            <div>
            	<button id="btLancerPartie" onclick="Page.lancerPartie()">Lancer la partie</button>
            </div>
          </td>
          <td id="td2">
            <div id="idContainer" class="container">
              <img id="imgPlateau" src="<c:url value="resources/JeuIntelligent.png" />"> 
              <div class="divPlateau">
                <table id="plateau">
                  <%--__________________________________________________________
                    __________________ligne 1 ____________________________________
                    ______________________________________________________________--%>
                  <tr>
                    <td class="tdPlateau">
                      <div class="divTd" id="case10">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case11">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case12">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case13">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case14">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case15">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case16">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                  </tr>
                  <%--__________________________________________________________
                    __________________ligne 2 ____________________________________
                    ______________________________________________________________--%>
                  <tr>
                    <td class="tdPlateau">
                      <div class="divTd" id="case9">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case26">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case27">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case28">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case29">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td rowspan="2" class="tdPlateau" >
                      <div class="divTd" id="case30">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case17">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                  </tr>
                  <%--__________________________________________________________
                    __________________ligne 3 ____________________________________
                    ______________________________________________________________--%>
                  <tr>
                    <td class="tdPlateau">
                      <div class="divTd" id="case8">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case25">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td colspan="3" class="tdPlateau">
                      <div class="divTd" id="case31">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case18">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                  </tr>
                  <%--__________________________________________________________
                    __________________ligne 4 ____________________________________
                    ______________________________________________________________--%>
                  <tr>
                    <td class="tdPlateau">
                      <div class="divTd" id="case7">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case24">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case23">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case22">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case21">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case20">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case19">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                  </tr>
                  <%--__________________________________________________________
                    __________________ligne 5 ____________________________________
                    ______________________________________________________________--%>
                  <tr>
                    <td class="tdPlateau">
                      <div class="divTd" id="case6">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case5">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case4">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case3">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case2">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case1">
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                    <td class="tdPlateau">
                      <div class="divTd" id="case0" >
                        <div class="cercle1"></div>
                        <div class="cercle2"></div>
                        <div class="cercle3"></div>
                        <div class="cercle4"></div>
                        <div class="cercle5"></div>
                        <div class="cercle6"></div>
                        <div class="cercle7"></div>
                        <div class="cercle8"></div>
                        <div class="cercle9"></div>
                        <div class="cercle10"></div>
                        <div class="cercle11"></div>
                        <div class="cercle12"></div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </td>
          <td id="td3">
            <div id="divDes">
              <button onclick="Page.lancerDes()">Lancer le dé</button>
              <p id="des"></p>
            </div>
          </td>
        </tr>
      </table>
    </div>
	<div id="CadreBas">
		<ul>
			
		</ul>
	</div>
	<script type="text/javascript" src="<c:url value="js/Partie.js" />"></script>
	<script type="text/javascript" src="<c:url value="js/Joueur.js" />"></script>
	<script type="text/javascript" src="<c:url value="js/Page.js" />"></script>
  </body>
</html>