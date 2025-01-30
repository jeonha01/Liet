import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import api from '../../api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // 로그인 처리 로직을 여기에 작성
        if (!email || !password) {
            alert('아이디와 비밀번호를 입력하세요.');
            return;
        }

        try {
            const response = await api.post('https://your-api.com/login', {
                email: email,
                password: password
            });

            console.log('로그인 성공:', response.data);
            // 로그인 성공 시 처리 (예: 토큰 저장, 화면 전환)
        } catch (error) {
            console.error('로그인 실패:', error.response?.data || error.message);
            alert('로그인에 실패했습니다.');
        }
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleFindId = () => {
        console.log('아이디 찾기 클릭됨');
    };

    const handleFindPassword = () => {
        console.log('비밀번호 찾기 클릭됨');
    };

    const handleSignUp = () => {
        console.log('회원가입 클릭됨');
    };

    return (
        <View style={styles.container}>

            <Text style={styles.text}>"실시간" 지능형 운동 추적기</Text>
            <Text style={styles.text1}>아이디</Text>
            <TextInput
                style={styles.input}
                placeholder="아이디를 입력하세요"
                placeholderTextColor="white"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text style={styles.text1}>비밀번호</Text>
            <TextInput
                style={styles.input}
                placeholder="비밀번호를 입력하세요"
                placeholderTextColor="white"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {/* 아이디 찾기 | 비밀번호 찾기 */}
            <View style={styles.findContainer}>
                <View style={styles.account}>
                    <TouchableOpacity onPress={handleFindId} activeOpacity={1}>
                        <Text style={styles.findText}>아이디 찾기</Text>
                    </TouchableOpacity>
                    <Text style={styles.findSeparator}> | </Text>
                    <TouchableOpacity onPress={handleFindPassword} activeOpacity={1}>
                        <Text style={styles.findText}>비밀번호 찾기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signup}>
                    <TouchableOpacity onPress={handleSignUp} activeOpacity={1}>
                        <Text style={styles.signUpText}>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>
            <Text style={styles.snsContainer}>SNS 계정으로 로그인</Text>
            <View style={styles.snsBtnContainer}>
                <TouchableOpacity style={styles.snsButton} />
                <TouchableOpacity style={styles.snsButton} />
                <TouchableOpacity style={styles.snsButton} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40'
    },
    snsBtnContainer: {
        flexDirection: 'row',
    },
    snsButton: {
        backgroundColor: '#0066cc',
        width: 24,
        height: 24,
        borderRadius: 50,
        marginHorizontal: 25,
    },
    text: {
        color: 'white',
        fontSize: 22,
        marginBottom: 20,
    },
    text1: {
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        fontSize: '12',
        alignSelf: 'flex-start',  // Text를 왼쪽으로 정렬
        width: '100%',  // 전체 너비로 맞추기
        paddingLeft: 5,  // 여백을 추가해줌
    },
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#161616',
        color: 'white',
        borderRadius: 3,
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 12,
    },
    findContainer: {
        flexDirection: 'row',  // 가로 정렬
        justifyContent: 'space-between', // 양 끝 정렬
        alignItems: 'center',  // 세로 정렬 맞추기
        marginTop: 30,
        width: '100%',
        paddingHorizontal: 5, // 좌우 여백 추가
    },
    account: {
        flexDirection: 'row',
        flex: 1, // 왼쪽 영역 차지
    },
    signup: {
        flexDirection: 'row',
        flex: 1, // 오른쪽 영역 차지
        justifyContent: 'flex-end', // 오른쪽 정렬
    },
    findText: {
        color: 'white',
        fontSize: 9,
    },
    findSeparator: {
        color: 'white',
        fontSize: 9,
        marginHorizontal: 5,
    },
    button: {
        marginTop: 70,
        width: '100%',
        padding: 15,
        backgroundColor: '#0066cc',
        alignItems: 'center',
        borderRadius: 3,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    signUpText: {
        color: 'white',
        fontSize: 9,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10, // 위아래 간격
    },
    line: {
        flex: 1,  // 남은 공간을 차지해서 선 길이 조절
        height: 1,  // 선 두께
        backgroundColor: '#959595',  // 선 색깔
    },
    orText: {
        color: 'white',
        fontSize: 8,
        marginHorizontal: 15, // OR과 선 사이 간격
    },
    snsContainer: {
        fontSize: 8,
        color: 'white',
        marginVertical: 10, // 위아래 간격
    },
});