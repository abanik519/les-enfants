import React, { Component } from 'react';
import './App.css';
import image01 from "./images/01.jpg";
import image02 from "./images/02.jpg";
import image03 from "./images/03.jpg";
import image04 from "./images/04.jpg";
import image05 from "./images/05.jpg";
import image06 from "./images/06.jpg";
import image07 from "./images/07.jpg";
import image08 from "./images/08.jpg";
import image09 from "./images/09.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import avatar from "./images/Avatar.png";
import pause from "./images/pause.png";
import play from "./images/play.png";


var slideIndex = 1;
export class App extends Component {

  componentDidUpdate(){
    this.showSlides(slideIndex);
  }


  showSlides(n) {
    if(document.getElementById('book')){
      var i;
      var slides =  Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if(document.getElementById("pageNum")){
      this.showSlides(slideIndex += n);  
      document.getElementById("pageNum").innerHTML = "Page " + String(slideIndex-1);
      if(slideIndex == 1){
          document.getElementById("pageNum").innerHTML = "";
      }
      //document.getElementById("n").style.display = "none";
      if(slideIndex >= 3){
          document.getElementById("p").style.display = "block";
      }
      else{
          document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id){
    if(document.getElementById(id)){
      var text = document.getElementById(id).style.display;
      if(text == "block"){
          document.getElementById(id).style.display = "none";
      }
      else{
          document.getElementById(id).style.display = "block";
      }
    }
  }

  show(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "block";
    }
  }

  hide(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "none";
    }
  }

  showNext(){
    if(document.getElementById("n")){
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      //question.play();
    }
  }

  pauseQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      //question.pause();
    }
  }
  render() {
    return (
      <div id='book'>
        {/* Slideshow container */}

        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
            <div className="title">Les  enfants de cire</div>
            <div className="slide-container">
                <div className="arrow-container">
                    <div className="next" id="p" onClick={() => this.plusSlides(-1)}>&#10094;</div>
                </div>

                {/* Slides */}
                {/* Intro Slide */}
                <div className="slide fade" style={{display: "flex"}}>
                    <div className="image-container">
                        <img className="image" src={image01}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                        <div id="intro" className="speech sb1">
                            Aujourd’hui, tu vas lire l’histoire « Les enfants de cire. » Sélectionnez la flèche pour passer à la page suivante.
                            <span className="success-checkmark" onClick={this.hide('intro'), this.showNext()}></span>
                        </div>
                    </div>

                    <div className="input-container">
                        <input className="input-box" placeholder="Enter Name"/>
                        <input className="input-box" placeholder="Enter ID"/>
                        <input className="input-box" placeholder="Enter RA Name"/>
                        <input className="input-box" placeholder="Enter Date"/>
                        <div className="begin-button" onClick={this.show('intro')}>Press To Begin</div>
                    </div>
                </div>
                {/* Slide 1 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image02}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Il y a une famille bien heureuse. Ils ne se disputent jamais.
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image03}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Ils aident leurs parents à la maison et dans les champs. 
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image04}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Mais ils n’ont pas le droit de s’approcher d’un feu.
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image05}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Ils doivent faire tout leur travail pendant la nuit. Puisqu’ils sont faits de cire! Mais un des garçons désire se promener au soleil.
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 5 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image06}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Un jour son désir est trop puissant. Ses frères l’avertissent… 
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 6 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image07}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Mais c’est trop tard! Il fond au soleil brûlant.
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 7 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image08}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Les enfants de cire sont si tristes de voir leur frère fondre.
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 8 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image09}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Mais ils font un plan. Ils façonnent le morceau de cire fondue en oiseau.
                            <span className="success-checkmark" onClick={this.showNext()}></span>
                        </p>
                    </div>
                </div>
                {/* Slide 9 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image10}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Ils apportent leur frère l’oiseau jusqu’au sommet d’une montagne haute.
                            <span className="success-checkmark" onClick={this.showNext()}></span>

                        </p>
                    </div>
                </div>
                {/* Slide 10 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image11}/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar}/>
                        </div>
                    </div>


                    <div className="text-container">
                        <p>Et lorsque le soleil se lève, il s’envole vers la lumière du matin en chantant.
                            <span className="success-checkmark" onClick={this.showNext()}></span>

                        </p>
                    </div>
                </div>
                {/* Question Slide Intro */}
                <div className="slide fade">
                    <div className="question-prompt-container">
                        <p>Tu as lu l’histoire « Les enfants de cire. » 
                            Sélectionnez le bouton vert « RECORD » et dites-nous l’histoire du
                            début à la fin. Dites-nous tous les événements et détails dont vous
                            vous souvenez.</p>
                    </div>
                    <div className="audio-controls-container">
                        <audio id="story-retel">
                            <source src="/sounds/story_retail_instructions.mp3" type="audio/mpeg" />
                        </audio>
                        <img className="audio-button" id="play" src={play} onClick={this.playQuestion()}/>
                        <img className="audio-button" id="pause" style={{display: 'none'}} src={pause} onClick={this.pauseQuestion()}/>
                    </div>
                </div>

                { window.screen.width < 641 ?
                (
                  <div>
                <div className="slide fade">
                    <div className="question-container">
                        <div className="question-title">Questions littérales</div>
                        <p className="question">1. Qu’est-ce que le frère oiseau fait lorsque le soleil se lève?</p>
                        <p className="question-option">a) il fait un plan. </p>
                        <p className="question-option">b) il s’envole vers la lumière du matin </p>
                        <p className="question-option">c) il se promène </p>
                        <p className="question-option">d) il aide ses parents </p>
                    </div>
                </div>
                <div className="slide fade">
                    <div className="question-container">
                        <div className="question-title">Questions littérales</div>
                        <p className="question">2. Pourquoi est-ce que les enfants de cire sont si tristes? </p>
                        <p className="question-option">a) parce qu’ils ont une famille bien heureuse.  </p>
                        <p className="question-option">b) parce qu’ils aident leurs parents à la maison.  </p>
                        <p className="question-option">c) parce que leur frère fond au soleil brûlant.</p>
                        <p className="question-option">d) parce que leur frère l’oiseau s’envole. </p>
                    </div>
                </div>
                </div> ) : (                <div className="slide fade">
                    <div className="question-container">
                        <div className="question-title">Questions littérales</div>
                        <p className="question">1. Qu’est-ce que le frère oiseau fait lorsque le soleil se lève?</p>
                        <p className="question-option">a) il fait un plan. </p>
                        <p className="question-option">b) il s’envole vers la lumière du matin </p>
                        <p className="question-option">c) il se promène </p>
                        <p className="question-option">d) il aide ses parents </p>
                        <p className="question">2. Pourquoi est-ce que les enfants de cire sont si tristes? </p>
                        <p className="question-option">a) parce qu’ils ont une famille bien heureuse.  </p>
                        <p className="question-option">b) parce qu’ils aident leurs parents à la maison.  </p>
                        <p className="question-option">c) parce que leur frère fond au soleil brûlant.</p>
                        <p className="question-option">d) parce que leur frère l’oiseau s’envole. </p>
                    </div>
                </div>)
                }


                <div className="arrow-container">
                    <div className="next" id="n" onClick={() => this.plusSlides(1)}>&#10095;</div>
                </div>
            </div>

            
            <div className="pageNum-container">
                <p id="pageNum"></p>
            </div>

        </div>
      </div>
    )
  }
}

export default App;
