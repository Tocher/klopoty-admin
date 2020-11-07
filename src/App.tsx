import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import PostIcon from '@material-ui/icons/Book';
import {TaskList} from './tasks';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
            name="users"
            options={{ label: 'Задания' }}
            icon={PostIcon}
            list={TaskList}
            edit={EditGuesser}
        />
    </Admin>
);

export default App;
