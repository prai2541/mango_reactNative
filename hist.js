import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, } from 'react-native';
import * as widget from 'react-native-elements';


var data = [
    {
        date: 'date',
        loc: 'loc',
        time: 'time'
    },
    {
        date: 'date',
        loc: 'loc',
        time: 'time'
    }
    ,{
        date: 'date',
        loc: 'loc',
        time: 'time'
    }
    ,{
        date: 'date',
        loc: 'loc',
        time: 'time'
    }
    ,{
        date: 'date',
        loc: 'loc',
        time: 'time'
    }
]


export default class Histlist extends Component {
    render() {
        return(
            <View>
                <FlatList 
                    data={data}
                    renderItem = {({item, index}) => {
                        <widget.Card>
                            <Text>{item.date}</Text>
                            <Text>{item.loc}</Text>
                        </widget.Card>
                    }}
                />
            </View>
        );
    }
}