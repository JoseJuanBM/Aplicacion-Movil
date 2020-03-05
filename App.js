import  React, {Component} from 'react';
import { Text, View, ActivityIndicator} from 'react-native';
import { FlatList} from "native-base";
import Constants from 'expo-constants';

class Principal extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading : true
    }
  }

  async componentDidMount(){
        try{
             const response = await fetch('https://reactnative.dev/movies.json');
             const responseJson = await response.json();

             this.state({
               isLoading: false,
               dataSource: responseJson.movies,
             }, function(){

             });
             
        }
        catch (error){
          console.log(error);
        }


      } // end component

      render(){
        if (this.state.isLoading) {
          return(
            <View style={{flex:1, padding: 20}}>
                 <ActivityIndicator />
            </View>

          );
        } // end igf
        return(
          <View>
               <FlatList
                      data = {this.state.dataSource}
                      renderItem = {({item}) => 
                        <Text>{item.title}, 
                        {item.releaseYear}</Text>
      }
      KeyExtractor = {({id}, index) => id }
      />
    </View>
  );
  } //end render


}// end class

export default Principal;