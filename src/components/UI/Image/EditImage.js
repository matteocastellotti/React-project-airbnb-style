import React, { Component } from 'react';
      , w = {
        getStores: function() {
            return function() {
                return [h.a, m.a, v.a]
            }
        }(),
        getPropsFromStores: function() {
            return function() {
                var e = h.a.getState().listing.id
                  , t = v.a.getState();
                return {
                    listingId: e,
                    transformScale: t.transformScale,
                    edits: t
                }
            }
        }()
    };
    function P(e) {
        b.a.imageLoaded(e.target)
    }
class EditImage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mode: "preview",
            canvas: null
        };
        this.onClickSubmit = this.onClickSubmit.bind(n);
        this.onCanvasLoaded = this.onCanvasLoaded.bind(n);
        this.onClickRotateLeft = this.onClickRotateLeft.bind(n);
        this.onCancelEditingMode = this.onCancelEditingMode.bind(n);
        this.onSelectEditingMode = this.onSelectEditingMode.bind(n);
        this.onSaveEditingMode = this.onSaveEditingMode.bind(n);
        this.onKeyDown = this.onKeyDown.bind(n);
    }
    
    componentDidMount() {
        //p()(u.a);
        var image = new Image;
        image.crossOrigin = "anonymous";
        image.onload = P;
        image.src = this.props.photo.original_url;
    }
          
    componentWillUnmount() {
        if(this.$fileInput) {
            this.$fileInput.fileupload("destroy");
        }
        b.a.resetImage.defer();
    }
    
    onCanvasLoaded(e) {
        this.setState({ canvas: e });
    }
            
    onClickSubmit() {
        this.setState({ exporting: true });
        var e = this.props
            , t = e.pictureIndex
            , n = e.listingId
            , r = e.edits
            , o = r.image
            , a = this
            , i = document.createElement("canvas")
            , s = Object(_.c)({
            rotate: r.transformRotate,
            width: o.width,
            height: o.height
        });
        let canvas = document.createElement("canvas");
        if(this.props.cropped) {
            canvas.width = s.frameWidth / this.props.edits.transformScale;
            canvas.height = s.frameHeight / this.props.edits.transformScale;
        } else { 
            canvas.width = s.width / this.props.edits.transformScale;
            canvas.height = s.height / this.props.edits.transformScale;
        }

        var context = canvas.getContext("2d");
        Object(_.g)(context, o, this.props.edits.cropped, this.props.edits);
        Object(_.j)(canvas).then(function(e) {
            this.$fileInput = Object(_.b)(this.props.pictureIndex, this.props.listingId);
            this.$fileInput.fileupload("add", {
                files: [e]
            }),
            this.setState({ exporting: false });
            b.a.imageSaved.defer(),
            g.a.clickedClosePictureModal.defer()
        }).catch(function() {
            this.setState({ exporting: false });
        })
    }
     
    onSelectEditingMode(e) {
        b.a.pushState(),
        this.setState({ mode: e });
    }
           
    onCancelEditingMode() {
        b.a.popState();
        this.setState({ mode: "preview" });
    }
            
    onSaveEditingMode() {
        this.state.mode === "crop" && b.a.croppedImage();
        this.setState({ mode: "preview", hasChanges: true });
    }
            
    onClickRotateLeft() {
        Object(k.b)("left");
        this.onSaveEditingMode();
    }
            
    onKeyDown(event) {
        if("Escape" === event.key) {
            if(this.state.mode === "preview") {
                g.a.clickedClosePictureModal();
            } else {
                this.onCancelEditingMode();
            }
        }
    }
         
    render() {
        /*var e = this.props
            , t = e.photo
            , n = e.edits
            , r = e.showContrastControls
            , o = n.image
            , a = n.transformScale
            , s = n.transformTranslateX
            , c = n.transformTranslateY
            , u = n.brightnessValue
            , d = n.contrastValue
            , p = t.preview_src || t.extra_medium_url
            , h = l()("photo-frame", {
            "loading loading-dark": !o || this.state.exporting
        });*/
        return (
            <div className="preview-modal-container__content">
                <div className={h}>
                    {this.props.edits.image && 
                        <E.a
                            className={l()({
                                cropping: this.state.mode === "crop"
                            })}
                            onCanvasLoaded={this.onCanvasLoaded}
                            showGrid={this.state.mode === "crop"}
                            edits={this.props.edits} />
                    }
                    {!this.props.edits.image && 
                        <img
                            src={this.props.phoyo.preview_src || this.props.photo.extra_medium_url}
                            alt="" />
                    }
                </div>
                <div className="controls text-white lys-photo-slider">
                    <div className="page-container-responsive">
                        {this.state.mode === "preview" && 
                            <C.a
                                canvas={this.state.canvas}
                                image={this.props.photo.image}
                                hasChanges={this.state.hasChanges}
                                onClickRotate={this.onClickRotateLeft}
                                onSelectEditingMode={this.onSelectEditingMode}
                                onSubmit={this.onClickSubmit} />
                        }
                        {this.state.mode === "crop" && 
                            <S.a
                                canvas={this.state.canvas}
                                transformTranslateX={this.props.edits.transformTranslateX}
                                transformTranslateY={this.props.edits.transformTranslateY}
                                onMove={k.a}
                                onMoveFinished={b.a.movedImage}
                                transformScale={this.props.edits.transformScale}
                                onScaleChange={k.c}
                                onSaveEditingMode={this.onSaveEditingMode}
                                onCancelEditingMode={this.onCancelEditingMode} />
                        }
                        {this.state.mode === "filter" && 
                            <O.a
                                brightnessValue={this.props.edits.brightnessValue}
                                contrastValue={this.props.edits.contrastValue}
                                onBrightnessChange={b.a.imageBrightnessChanged}
                                onContrastChange={b.a.imageContrastChanged}
                                onSaveEditingMode={this.onSaveEditingMode}
                                onCancelEditingMode={this.onCancelEditingMode}
                                showContrastControls={this.props.edits.showContrastControls} />
                        }
                    </div>
                </div>
                <y.a
                    target={document}
                    type="keydown"
                    onEvent={this.onKeyDown} />
            </div>
        )
    }
}

export default EditImage;