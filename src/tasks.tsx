import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const TaskList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
        </Datagrid>
    </List>
);
