import React from 'react';
import Webiny from 'webiny';

/**
 * @i18n.namespace MyApp.Backend.Apartments.ApartmentForm
 */
class ApartmentForm extends Webiny.Ui.View {
}

ApartmentForm.defaultProps = {
    renderer() {
        const formProps = {
            api: '/entities/my-app/apartments',
            fields: 'id,name,description,price,dateAvailable,mainImage,gallery',
            connectToRouter: true,
            onCancel: 'Apartments.List',
            onSuccessMessage: ({model}) => {
                return <span>{this.i18n('Apartment {name} was saved successfully!', {name: <strong>{model.name}</strong>})}</span>;
            },
            onSubmitSuccess: 'Apartments.List'
        };

        const {Ui} = this.props;

        return (
            <Ui.Form {...formProps}>
                {({model, form}) => (
                    <Ui.View.Form>
                        <Ui.View.Header title={model.id ? this.i18n('Edit Apartment') : this.i18n('Create Apartment')}/>
                        <Ui.View.Body>
                            <Ui.Grid.Row>
                                <Ui.Grid.Col all={6}>
                                    <Ui.Section title={this.i18n('Info')}/>
                                    <Ui.Grid.Row>
                                        <Ui.Grid.Col all={12}>
                                            <Ui.Input label={this.i18n('Name')} name="name" validate="required"/>
                                            <Ui.Textarea label={this.i18n('Description')} name="description" validate="required"/>
                                            <Ui.Date label={this.i18n('Date available')} name="dateAvailable" validate="required"/>
                                            <Ui.Input label={this.i18n('Price')} name="price" validate="required,number,gt:0"/>
                                        </Ui.Grid.Col>
                                    </Ui.Grid.Row>
                                </Ui.Grid.Col>
                                <Ui.Grid.Col all={6}>
                                    <Ui.Section title={this.i18n('Main Image')}/>
                                    <Ui.Image name="mainImage"/>
                                    <Ui.Section title={this.i18n('Gallery')}/>
                                    <Ui.Gallery name="gallery"/>
                                </Ui.Grid.Col>
                            </Ui.Grid.Row>
                        </Ui.View.Body>
                        <Ui.View.Footer>
                            <Ui.Button type="default" onClick={form.cancel} label={this.i18n('Go back')}/>
                            <Ui.Button type="primary" onClick={form.submit} label={this.i18n('Save apartment')} align="right"/>
                        </Ui.View.Footer>
                    </Ui.View.Form>
                )}
            </Ui.Form>
        );
    }
};

export default Webiny.createComponent(ApartmentForm, {
    modulesProp: 'Ui',
    modules: ['View', 'Form', 'Grid', 'Tabs', 'Input', 'Textarea', 'Date', 'Switch', 'Button', 'Section', 'Image', 'Gallery']
});
