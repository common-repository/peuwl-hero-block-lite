/**
 * BLOCK: Peuwl Hero Block LITE - By Peuwl
 */
//  Import CSS.
import './style.scss';
import './editor.scss';
import PeuwlHeroBlockLite from './components/PeuwlHeroBlockLite';
/* Libs */
const { __ } = wp.i18n; 
const { Fragment } = wp.element;
const { InspectorControls, MediaUpload, InnerBlocks} = wp.editor;
const { registerBlockType } = wp.blocks; 
const { PanelBody, PanelRow, ToggleControl, RadioControl, Button, RangeControl, ColorPicker, Disabled} = wp.components;
/* Libs End */

registerBlockType( 'peuwl-plugins/peuwl-hero-block-lite', {
	title: 'Peuwl Hero Block LITE',
	icon: 'format-gallery', 
	category: 'peuwl-blocks',  
	keywords: [
		__( 'peuwl' ),
		__( 'hero' ), 
		__( 'gutenberg' ),
	],	
	supports: {
		align: ['full', 'wide'],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		herotype: {
			type: 'string',
			default: 'image'
		},
		image: {
			type: 'object',
			default: {}
		},
		imageresolution: {
			type: 'string',
			default: 'full'
		},
		verticalalign: {
			type: 'string',
			default: 'center'
		},
		height: {
			type: 'number',
			default: '50'
		},
		minheight: {
			type: 'number',
			default: '500'
		},
		maxheight: {
			type: 'number',
			default: '1200'
		},
		bgcolor: {
			type: 'string',
			default: '#EEE'
		},
		contentmaxwidth: {
			type: 'number',
			default: '90'
		},
		contentwidth: {
			type: 'number',
			default: '1100'
		},
		overlay: {
			type: 'bool',
			default: false
		},
		overlaycolor: {
			type: 'string',
			default: 'rgba(0,0,0,0.2)'
		},
		forcetextcolor: {
			type: 'bool',
			default: false
		},
		textcolor: {
			type: 'string',
			default: '#ccc'
		},
	},
	edit: function( props ) {	
		const removeMedia = () => props.setAttributes({ image: {}, video: {}});
		function isObjectEmpty(obj){return Object.getOwnPropertyNames(obj).length >= 1 }
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('General Settings')} initialOpen={ true }>	
						<PanelRow>
							<p><small><i>{__('Use a full width template!')}</i></small></p>
						</PanelRow>
						<PanelRow>
							<label>{__('Hero Type')}</label>
						</PanelRow> 
						<PanelRow>
							<Disabled>
							<RadioControl 
								selected={props.attributes.herotype}
								options={[
									{label: __('Image'), value: 'image'},
									{label: __('Video'), value: 'video'},
								]}
							/>
							</Disabled>
						</PanelRow>	
						<PanelRow>
							<p><small><i>{__('Video option is available in the full version')}.<br/><a target="_blank" href="https://peuwlplugins.com/peuwl-hero-block-for-gutenbrg/">{__('Buy it here')}.</a></i></small></p>
						</PanelRow>		
						{(props.attributes.herotype === 'image') &&						
							<div>
								{(isObjectEmpty(props.attributes.image)) &&	
									<Fragment>	
										<PanelRow>
											<img style={{display: 'block'}} src={props.attributes.image.thumbnail.url} />
											<div style={{clear: 'both'}}></div>
										</PanelRow>
										<PanelRow>
											<Button isDefault onClick={removeMedia}>
												{__('Remove Media')}
											</Button>
										</PanelRow>
									</Fragment>
								}
								<PanelRow>
									<MediaUpload
										onSelect={ image => props.setAttributes({image: image.sizes})}
										allowedTypes={'image'}
										value={props.attributes.image}
										render={({ open }) => (
											<Button isDefault onClick={open}>
												{__('Upload / Change image')}
											</Button>
										)}
									/>
								</PanelRow>		
									{(props.attributes.herotype === 'image' && isObjectEmpty(props.attributes.image)) &&
										<Fragment>
											<PanelRow>
												<Disabled>
													<ToggleControl 
														label={__("Parallax")}
														checked={false}
													/>
												</Disabled>
											</PanelRow>
											<PanelRow>
												<p><small><i>{__('Parallax option is available in the full version')}.<br/><a target="_blank" href="https://peuwlplugins.com/peuwl-hero-block-for-gutenbrg/">{__('Buy it here')}.</a></i></small></p>
											</PanelRow>	
										</Fragment>
									}
									{(props.attributes.herotype === 'image' && isObjectEmpty(props.attributes.image)) &&
									<div>
										<PanelRow>
											<RadioControl 
												label={__('Resolution')} 
												selected={props.attributes.imageresolution}
												options={[
													{label: __('Original'), value: 'full'},
													{label: __('Large'), value: 'large'},
													{label: __('Medium'), value: 'medium'}
												]}
												onChange={imageresolution => props.setAttributes({imageresolution})}
											/>
										</PanelRow>	
										<PanelRow>
											<RadioControl 
												label={__('Vertical Align')} 
												selected={props.attributes.verticalalign}
												options={[
													{label: __('Align Center'), value: 'center'},
													{label: __('Align Top'), value: 'top'},
													{label: __('Align Bottom'), value: 'bottom'}
												]}
												onChange={verticalalign => props.setAttributes({verticalalign})}
											/>
										</PanelRow>
									</div>
								}
							</div>
						} 
						<PanelRow>
							<Disabled>
							<ToggleControl 
								label={__("Fade in")}
								checked={false}
							/>
							</Disabled>
						</PanelRow>
						<PanelRow>
							<p><small><i>{__('Fade option is available in the full version')}.<br/><a target="_blank" href="https://peuwlplugins.com/peuwl-hero-block-for-gutenbrg/">{__('Buy it here')}.</a></i></small></p>
						</PanelRow>	
					</PanelBody>
					<PanelBody title={__('Content Settings')} initialOpen={ false }>
						<PanelRow>
							<label>{__('Content Max Width (%)')}</label>
						</PanelRow> 
						<PanelRow>
							<RangeControl 
								value={ props.attributes.contentmaxwidth }
								onChange={ contentmaxwidth  => props.setAttributes({ contentmaxwidth })}
								min={ 10}
								max={ 100 }
							/>	
						</PanelRow>
						<PanelRow>
								<label>{__('Content Width (px)')}</label>
						</PanelRow> 
						<PanelRow>
							<RangeControl 
								value={ props.attributes.contentwidth }
								onChange={ contentwidth  => props.setAttributes({ contentwidth })}
								min={ 50}
								max={ 1500 }
							/>	
						</PanelRow>
						<PanelRow>
							<ToggleControl 
								label={__("Force Text Color")}
								checked={props.attributes.forcetextcolor}
								onChange={forcetextcolor => props.setAttributes({ forcetextcolor })}
							/>
						</PanelRow>	
						<PanelRow>
							<div>
								<i>{__('Enabling "Force Text Color" will overwrite the themes default color for headings and paragraphs (etc) inside the hero section.')}</i>
							</div>
						</PanelRow>					
							{(props.attributes.forcetextcolor) && 
								<PanelRow label={__('Text Color')}>
									<ColorPicker 
										color={props.attributes.textcolor}					
										value={ props.attributes.textcolor}
										onChangeComplete={ ( textcolor ) => props.setAttributes( { textcolor: 'rgba('+textcolor.rgb.r+','+textcolor.rgb.g+','+textcolor.rgb.b+','+textcolor.rgb.a+')' } ) } 
									/>
								</PanelRow>
							}
						</PanelBody>
						<PanelBody title={__('Init Background Color')} initialOpen={ false }>
							<PanelRow>
								<div>
									<i>{__('Here you have the option to choose a background for the hero section before the javascript loads. Try to match this color with the color of the content to reduce that "flickering" feeling on the page load. If you got fading enabled, this is the color the content will fade in over.')}</i>
								</div>
							</PanelRow>	
							<PanelRow>
							<ColorPicker 
								color={props.attributes.bgcolor}					
								value={ props.attributes.bgcolor}
								onChangeComplete={ ( bgcolor ) => props.setAttributes( { bgcolor: 'rgba('+bgcolor.rgb.r+','+bgcolor.rgb.g+','+bgcolor.rgb.b+','+bgcolor.rgb.a+')' } ) } 
							/>
							</PanelRow>
						</PanelBody>
						{(isObjectEmpty(props.attributes.image)) &&	
							<PanelBody title={__('Overlay Settings')} initialOpen={ false }>						
								<PanelRow>
									<ToggleControl 
										label={__("Enable Overlay color")}
										checked={props.attributes.overlay}
										onChange={overlay => props.setAttributes({ overlay })}
									/>
								</PanelRow>					
								{(props.attributes.overlay) && 
									<PanelRow label={__('Overlay Color')}>
										<ColorPicker 
											color={props.attributes.overlaycolor}					
											value={ props.attributes.overlaycolor}
											onChangeComplete={ ( overlaycolor ) => props.setAttributes( { overlaycolor: 'rgba('+overlaycolor.rgb.r+','+overlaycolor.rgb.g+','+overlaycolor.rgb.b+','+overlaycolor.rgb.a+')' } ) } 
										/>	
									</PanelRow>
								}
							</PanelBody>
						}
					<PanelBody title={__('Desktop Height')} initialOpen={ false }>
						<PanelRow>
							<label>{__('Height (vh)')}</label>
						</PanelRow> 
						<PanelRow>
							<RangeControl 
								value={ props.attributes.height }
								onChange={ height  => props.setAttributes({ height })}
								min={ 10}
								max={ 100 }
							/>	
						</PanelRow>
						<PanelRow>
							<label>{__('Minimum Height (px)')}</label>
						</PanelRow> 
						<PanelRow>
							<RangeControl 
								value={ props.attributes.minheight }
								onChange={ minheight  => props.setAttributes({ minheight })}
								min={ 100}
								max={ 1500}
							/>	
						</PanelRow>
						<PanelRow>
							<label>{__('Maximum Height (px)')}</label>
						</PanelRow> 
						<PanelRow>
							<RangeControl 
								value={ props.attributes.maxheight }
								onChange={ maxheight  => props.setAttributes({ maxheight })}
								min={ 200}
								max={ 2000}
							/>	
						</PanelRow>
					</PanelBody>
					<PanelBody title={__('Mobile Height')} initialOpen={ false }>
						<PanelRow>
							<p><small><i>{__('Mobile settings ar available in the full version')}.<br/><a target="_blank" href="https://peuwlplugins.com/peuwl-hero-block-for-gutenbrg/">{__('Buy it here')}.</a></i></small></p>
						</PanelRow>	
						<Disabled>
							<PanelRow>
								<label>{__('Mobile Breakpoint (px). Default: 768px')}</label>
							</PanelRow> 
							<PanelRow>
								<RangeControl 
									value={ 768 }
									min={ 311}
									max={ 1100 }
								/>	
							</PanelRow>	
							<PanelRow>
								<label>{__('Height (vh)')}</label>
							</PanelRow> 
							<PanelRow>
								<RangeControl 
									value={ 50 }
									min={ 10}
									max={ 100 }
								/>	
							</PanelRow>
							<PanelRow>
								<label>{__('Minimum Height (px)')}</label>
							</PanelRow> 
							<PanelRow>
								<RangeControl 
									value={ 300 }
									min={ 100}
									max={ 1500}
								/>	
							</PanelRow>
							<PanelRow>
								<label>{__('Maximum Height (px)')}</label>
							</PanelRow> 
							<PanelRow>
								<RangeControl 
									value={ 1000}
									min={ 200}
									max={ 2000}
								/>	
							</PanelRow>
							<PanelRow>
								<p><small><i>{__('Mobile settings ar available in the full version')}.<br/><a target="_blank" href="https://peuwlplugins.com/peuwl-hero-block-for-gutenbrg/">{__('Buy it here')}.</a></i></small></p>
							</PanelRow>	
						</Disabled>
					</PanelBody>
				</InspectorControls>	
				{(!isObjectEmpty(props.attributes.image)) &&
					<div style={{padding: '100px',textAlign: 'center', backgroundColor: '#EEE', fontFamily: 'sans-serif'}}>
						<h4><a style={{color: 'black'}} target="_blank" href="https://peuwlplugins.com/">Peuwl</a> Hero Block LITE</h4>
						<p style={{fontSize: '14px', letterSpacing: '0.5px'}}>{__('Choose your Image.')}</p>
						<p style={{fontSize: '14px', letterSpacing: '0.5px'}}><small>{__('Do you want a video / parallax hero?')} <a target="_blank" href="https://peuwlplugins.com/peuwl-hero-block-for-gutenbrg/">{__('Buy full version here')}</a>.</small></p>
					</div>
				}
				{(isObjectEmpty(props.attributes.image)) &&	
					<PeuwlHeroBlockLite attributes={props.attributes}>
						<InnerBlocks/>
					</PeuwlHeroBlockLite>
				}
			</Fragment>
		);
	},
	save: function( props ) {
		return (
			<div id="peuwl-hero-block-lite" style={{ backgroundColor: props.attributes.bgcolor}} className="fwb peuwl-hero-block-lite" data-props={JSON.stringify(props.attributes)}>
				<div class="peuwl-hero-temp-desktop" style={{height: props.attributes.height + 'vh', minHeight: props.attributes.minheight, maxHeight: props.attributes.maxheight}}></div>
					<div id="peuwl-hero-fetch-content" style={{opacity: 0, position: 'absolute'}}>
						<InnerBlocks.Content />
					</div>
				
			</div>
		);
	},
} );
