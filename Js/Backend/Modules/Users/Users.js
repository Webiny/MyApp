import React from 'react';
import Webiny from 'webiny';

class Users extends Webiny.Ui.View {
    // The class itself doesn't do anything in this example
}

Users.defaultProps = {
    renderer() {
        const listProps = {
            api: '/entities/webiny/users',
            fields: 'id,enabled,firstName,lastName,email,createdOn,gravatar',
            connectToRouter: true
        };

        const {View, List} = this.props;

        // Assign Table constant to make markup more compact
        const Table = List.Table;

        return (
            <View.List>
                <View.Header
                    title="Users"
                    description="Here you will find the list of system users">
                </View.Header>
                <View.Body>
                    <List {...listProps}>
                        <Table>
                            <Table.Row>
                                <Table.GravatarField name="gravatar"/>
                                <Table.Field name="firstName" label="First Name" sort="firstName">
                                    {({data}) => (
                                        <span>
                                          <strong>{data.firstName} {data.lastName}</strong><br/>{data.id}
                                        </span>
                                    )}
                                </Table.Field>
                                <Table.Field name="email" sort="email" label="Email"/>
                                <Table.ToggleField
                                    name="enabled"
                                    label="Status"
                                    sort="enabled"
                                    align="center"
                                    message="This will disable user's account and prevent him from logging in!"/>
                                <Table.DateField name="createdOn" label="Created On" sort="createdOn"/>
                                <Table.Actions>
                                    <Table.EditAction route="Users.Edit"/>
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

export default Webiny.createComponent(Users, {
    modules: ['View', 'List']
});