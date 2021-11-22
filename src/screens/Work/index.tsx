import React from "react";
import { ScrollView, Text, View } from "react-native";
import { WorkScreenRouteProp } from "../../navigation/types";
import CardWork from "./components/CardWork";
import { Container, TitleName } from "./styles";

const Work: React.FC<WorkScreenRouteProp> = () => {
  return (
    <Container>
      <TitleName>Trabalhos</TitleName>
      <View style={{ height: "75%" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <CardWork
            title="Secretaria da Fazenda do Estado de Pernambuco"
            date="2018/2019"
            description="Estagiário e auxiliar para captação de informações referentes ao estado e publicações no site envolvendo
            HTML,CSS e Javascript."
            url="https://www.sefaz.pe.gov.br/_catalogs/masterpage/master2013/images/logomarca.png"
          />
          <CardWork
            title="Tribunal Regional Eleitoral de Pernambuco"
            date="2019/2020"
            description="Estagiário em Java com JSP e JSF para construção de plataformas internas e Auxilio no desenvolvimento
            de aplicações Web utilizando ReactJS e NodeJS."
            url="https://www.tse.jus.br/temas/imagens/logos/tre-pe.png"
          />
          <CardWork
            title="Leve Tecnologia"
            date="2020/2021"
            description="Estagiário e desenvolvedor fullstack em PHP. Envolvido bastante em desenvolvimento de aplicações de 
            ambientes clínicos e de planos de saúde."
            url="https://www.levetecnologia.com.br/img/logo.png"
          />
          <CardWork
            title="Eureka Labs"
            description="Atuando como Software developer, com tecnologias JS como ReactJS e NodeJS.
            Envolvido na construção de Aplicações relacionado ao gerenciamento de transportadoras."
            date="Atualmente"
            url="https://media-exp1.licdn.com/dms/image/C4D0BAQFIOMoIVQEmiA/company-logo_200_200/0/1570120716848?e=2159024400&v=beta&t=9XLc63PZatFiXSyyddnuiUFqxmejocuzXhqjbTBXfvg"
          />
        </ScrollView>
      </View>
    </Container>
  );
};

export default Work;
