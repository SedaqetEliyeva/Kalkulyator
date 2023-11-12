import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const arr1=[Math.sqrt, Math.PI, "^"]
const arr2=["(", ")", "%"];
const arrButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
const arrOperators =["!", "/", "*", "-", "+", "="];
function App() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("0");
    console.log("1", firstNumber);
    console.log("2", secondNumber);
    console.log("3", operator);
    
    const checkOperator = (a: number, b: number, opr: string) => {
        switch(opr) {
            case "!":
                return +a ! +b;
            case "/":
                return +a / +b;
            case "*":
                return +a * +b;
            case "-":
                return +a - +b;
            case "+":
                return +a + +b;
            case "^":
                return +a ^ +b;
            case "%":
                return +a % +b;
            default:
                break;
        };
        switch(Math.sqrt){
            case Math.sqrt:
                return Math.sqrt(a)
        };
    }

    const Clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperator("");
        setResult("0");
    };

    const x =() => {

    };

    const numberPress = (num: string) => {
        if (!secondNumber && !operator){
            setFirstNumber(firstNumber + num);
            setResult(firstNumber +num);
        } else if (operator){
            setSecondNumber(secondNumber + num);
            setResult(secondNumber + num);
        }
    };
    const operatorPress = (opr: string) => {
        if (firstNumber && secondNumber){
            const oprResult = checkOperator(firstNumber, secondNumber, operator);
            setResult(oprResult);
            setFirstNumber(oprResult);
            setSecondNumber("");
            setOperator("");
        }
        console.log(opr);
        setOperator(opr);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.actionArea}>
                <View style={styles.buttons}>
                    {arr1.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} style={styles.b1} onPress={x}>
                                <Text style={styles.b1Text}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    {arr2.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} style={styles.b2} onPress={x}>
                                <Text style={styles.b2Text}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    {arrButtons.map((item, index) =>{
                        return(
                            <TouchableOpacity key={index} style={styles.button} onPress={() => numberPress(item)}>
                                <Text style={styles.buttonText}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}
                    <TouchableOpacity style={styles.clearButton} onPress={Clear}>
                        <Text style={styles.clearButtonText}>C</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.oprArea}>
                    {arrOperators.map((item, index) => {
                        return(
                            <TouchableOpacity key={index} style={styles.oprButton} onPress={() => operatorPress(item)}>
                                <Text style={styles.buttonText}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    result: {
        flex: 0.35,
        backgroundColor: "gray",
        alignItems: "flex-end",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        justifyContent: "flex-end",
    },
    resultText: {
        fontSize: 52,
        color: "800080",
        fontWeight: "bold",
    },
    buttons: {
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "70%",
        justifyContent: "space-between",
        marginHorizontal: 15,
    },
    b1:{
        width: "30%",
        height:80,
        marginTop: 5,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    b2:{
        width: "30%",
        height:80,
        marginTop: 5,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    b1Text:{
        fontSize: 40,
        color: "white",
    },
    b2Text:{
        fontSize: 40,
        color: "white",
    },
    button: {
        width: "30%",
        height:80,
        marginTop: 5,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    oprButton: {
        width: "70%",
        height: 80,
        marginTop: 5,
        marginRight: 50,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 40,
        color: "white",
    },
    actionArea: {
        flexDirection: "row",
        width: "100%",
        flex: 1,
    },
    oprArea: {
        width: "30%",
        alignItems: "center",
        backgroundColor: "white"
    },
    clearButton: {
        backgroundColor: "black",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        elevation: 3,
        padding: 30,
        width: "30%",
    },
    clearButtonText: {
        fontSize: 16,
        color: "white",
    },
});