import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function CalcTotal() {

    const [operacoes, setOperacoes] = useState({
        a: 0,
        b: 0
    });

    const clean = () => {
        setResult({
            result: '',
        })
    };

    const [result, setResult] = useState(0);
    return (
        <View>
            <Text>O resultado é: {result}</Text>
            <TextInput
                style={css.input}
                placeholder="Digite o valor A" onChangeText={(valor) => setOperacoes({
                    ...operacoes, a: Number(valor)
                })
                } keyboardType="numeric"
            />

            <TextInput
                style={css.input}
                placeholder="Digite o valor B" onChangeText={(valor) => setOperacoes({
                    ...operacoes, b: Number(valor)
                })
                } keyboardType="numeric"
            />

            <TouchableOpacity style={css.input}
                onPress={() => setResult(operacoes.a + operacoes.b)}
            >
                <Text>+SOMA+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.input}
                onPress={() => setResult(operacoes.a - operacoes.b)}
            >
                <Text>-SUBTRAÇÃO-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.input}
                onPress={() => setResult(operacoes.a * operacoes.b)}
            >
                <Text>XMULTIPLICAÇÃOX</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.input}
                onPress={() => setResult(operacoes.a / operacoes.b)}
            >
                <Text>/DIVISÃO/</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.input}
                onPress={() => setResult(Math.pow(operacoes.a, operacoes.b))}
            >
                <Text>Exp a²b</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.input}
                onPress={() => setResult(Math.pow(operacoes.a, 2))}
            >
                <Text>a²</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={css.input}
                onPress={() => setResult(operacoes.a % operacoes.b)}
            >
                <Text>Resto</Text>
            </TouchableOpacity> */}


            <TouchableOpacity style={css.input}
                onPress={(clean) => setResult(operacoes.a = '', operacoes.b = '')}
            >
                <Text>AC-Clear</Text>
            </TouchableOpacity>

        </View>
    )
}

const css = StyleSheet.create({
    input: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        fontSize: 20
    }
})