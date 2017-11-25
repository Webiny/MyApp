import React from 'react';
import Webiny from 'webiny';

/**
 * @i18n.namespace MyApp.Backend.Apartments.Apartments
 */
class Apartments extends Webiny.Ui.View {
    
}

Apartments.defaultProps = {
    renderer() {
        const {View, Link, Input, Icon, List, List: {Table}} = this.props;

        const listProps = {
            api: '/entities/my-app/apartments',
            fields: 'id,name,createdOn,price',
            connectToRouter: true,
            searchFields: 'name'
        };

        return (
            <View.List>
                <View.Header title="Apartments" description="Here you will find the list of apartments">
                    <Link type="primary" route="Apartments.Create" align="right">
                        <Icon icon="fa-plus-circle"/>
                        Add apartment
                    </Link>
                </View.Header>
                <View.Body>
                    <List {...listProps}>
                        <List.FormFilters>
                            {({apply}) => (
                                <Input
                                    name="_searchQuery"
                                    placeholder={this.i18n('Search by name')}
                                    onEnter={apply()}/>
                            )}
                        </List.FormFilters>
                        <Table>
                            <Table.Row>
                                <Table.Field name="name" label={this.i18n('Name')} sort="name"/>
                                <Table.PriceField name="price" label={this.i18n('Price')} sort="price"/>
                                <Table.DateField name="createdOn" label={this.i18n('Created On')} sort="createdOn"/>
                                <Table.Actions>
                                    <Table.EditAction route="Apartments.Edit"/>
                                    <Table.DeleteAction/>
                                </Table.Actions>
                            </Table.Row>
                            <Table.Footer/>
                        </Table>
                        <List.Pagination/>
                    </List>
                </View.Body>
            </View.List>
        );
    }
};

export default Webiny.createComponent(Apartments, {
    modules: ['View', 'Link', 'Icon', 'Input', 'List']
});