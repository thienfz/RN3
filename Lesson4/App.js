import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'

class App extends Component {
  state = {}
  render() {
    return (
      <View style={stylish.component}>

        <Text style={stylish.headline}> Schedule </Text>
        <Image source={ball} style={{ height: 150, width: 150 }} />
        <Text style={stylish.title}> Empires' Cup 2118 </Text>
        <View style = {{height:30}}/>
        <View style={stylish.allMatch}>

          <View style={stylish.match}>
            <Text style={stylish.timer}> Jul 7 2118 - 18:00</Text>
            <View style={stylish.teams}>
              <Text style={stylish.teamName}>Viet Nam</Text>
              <Image source={vietnam} style={{ height: 20, width: 30 }} />
              <Text style={{ color: 'white' }}> vs </Text>
              <Image source={chinadog} style={{ height: 20, width: 30 }} />
              <Text style={stylish.teamName}>China</Text>
            </View>
          </View>

          <View style={stylish.match}>
            <Text style={stylish.timer}> Jul 8 2118 - 18:00</Text>
            <View style={stylish.teams}>
              <Text style={stylish.teamName}>Binh Thuan Kingdom</Text>
              <Image source={binhthuan} style={{ height: 20, width: 30 }} />
              <Text style={{ color: 'white' }}> vs </Text>
              <Image source={thanhhoa} style={{ height: 20, width: 30 }} />
              <Text style={stylish.teamName}>Thanh Hoa Emirates</Text>
            </View>
          </View>

          <View style={stylish.match}>
            <Text style={stylish.timer}> Jul 9 2118 - 18:00</Text>
            <View style={stylish.teams}>
              <Text style={stylish.teamName}>Nazi Germany</Text>
              <Image source={nazi_germany} style={{ height: 20, width: 30 }} />
              <Text style={{ color: 'white' }}> vs </Text>
              <Image source={soviet_union} style={{ height: 20, width: 30 }} />
              <Text style={stylish.teamName}>Soviet Union</Text>
            </View>
          </View>

          <View style={stylish.match}>
            <Text style={stylish.timer}> Jul 10 2118 - 18:00</Text>
            <View style={stylish.teams}>
              <Text style={stylish.teamName}>Argentina</Text>
              <Image source={argentina} style={{ height: 20, width: 30 }} />
              <Text style={{ color: 'white' }}> vs </Text>
              <Image source={portugal} style={{ height: 20, width: 30 }} />
              <Text style={stylish.teamName}>Portugal</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const stylish = StyleSheet.create({
  get submit() {
    return this._submit;
  },
  set submit(value) {
    this._submit = value;
  },
  component: {
    backgroundColor: 'rgb(41,47,54)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  headline: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'cyan',
    fontSize: 35,
  },
  title: {
    fontFamily: 'Times',
    fontSize: 25,
    color: 'yellow'

  },
  match: {
    flexDirection: 'row',
    height: 70,
    width: 300,
    backgroundColor: 'rgb(63,70,88)',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10
  },
  allMatch: {
    height: 320,
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  timer: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'courier'
  },
  teams: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  teamName:{
    color: 'white',
    width: 100,
    textAlign: 'center'
  }
})

const ball = {
  uri: 'https://i.imgur.com/7mb6drC.png'
}
const binhthuan = {
  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABdFBMVEX///8LksrtCQ/3qgQAicYAjcgAi8fsAAAAj8n3rAT8///v+Pyoz+dCo9L4sAPn9Posnc/Q6PShyuTuHg74sgP+mjF4t9v+7tXK4/H2ngX2pAD/oTMAkdH1lQbY6/VPqNTybgr836b0gwjxYgvzdgnxWwvwTwy32uzvLg2IweD1iwf2mAbwPw1wtdqGv99krtev1er/+/T+8fH/nwD1jY7tABjvMgD82tr/jQD/0qr6xcb9kzbwRgDxVAz+9eb1iAjzcwn3p6j84LL70oruKCvyYGL5t7jwRkjzdHVcm6P5ujb+7Oz6x136znPZqSsAi9LltUz715PorBeZnXbUtnXC3ODAozzLv4rIqlH70HqApKR2rsX2kpT5vk372KAjkLff07KKtLuwpnF5n5NAmLK8qVuFoImkpHvSrTjwQEL0enzxVVfzUCL1YTD4cSjxQin8sYz83MP9tH75nH3+o0j/xon/sm3/2bb6gTL3czr6wpGxp23B5L6bAAAfbElEQVR4nO1diVvbRtr3IUsWDrKDHRsbDI4vfHGGq8QGAiQhgSTbdDcbujm6bdrcZNuvR9r95785dIyk9x3LxgnZ5+HXpwF0jOanmfecQ6HQBS5wgQtc4AIXuMAFLsAwlpyZXJpoZucXOeazzYmlyZnk2HlXbARITk5kZ8OKoqixWFxELKaSo+HZ7MRk8rwrOSySc03CTSXEwjgIVZXwbM79r9FMzGVTqirl5uapqqnsXOK8qx0UM82UogYlJ9BUlVRz5rwr3x8zC2ElNjg9k2RMCS980SSTEyllWHY2SyU18aUK5dysEutPIED/jSmzc+dNxo9EMxyg7nF1dmk20HXh5peld2bmY/2bj9Q7S/tfMhtED8Vi81+ORM4sBpG+uJK1miWRDXbD4pfBMRmIX1gdF/VHclwNcA/heP5KJzEfiF887tUdc4H8gbgyf77yONYMZtqVRX89E4tKkFvjavMcHfS5cAD9QisJK/+5YK8nFj4v25EcD9QI4dg41tES44HeUFgZPxdxnAjovigLwk3LuVBuWfh7IdhLiisTn5teKJkKogwJxB66H1reD+0vk582loIWk/rMzRi0AeNx26QtPwvt5Qi5/VBuL/TMbsiZgDHW523GBGTNoJrGU5YILpOWW14+CbH/lklTLlscEynoRuCYisrzyDEJPj874VMbsXFb0S8fhwi/HPs9RziGju1WHPPrm9hEFnyHk5+HYBPSDmo2FPIdm7Xv2Q5t3wsxTiuMb+geOWKfnfXRCYUgimGl+Rn4jfmrQ8lQhTnnPhNbdO7a37N06E32L9Gpe4K+WXS3ItNOC+BzZj+5+U+GIcVgWoRx8ZxIMGTzOdKO+C+EswAXxfg4OwZaknj4E+vUSTBDoZom77Lw2mNOFw3l7uWsX29oN4CjpKMKFJXL/BjYivHYJxXGJdBAq/PW+UWbv9kOFva+Nn+5rd02f/va1YhC+8ftxp8HjaWy9GnIUUyABIXumLQuiKcEeVnes5XKihbRVqw/tvcE92bMNhqK0w8XQa/u01lG2MVytdaCWc24S1pyz+4tk/5JEYlE2M8boeV7z3LiRUnrVtHLGwfdAZcjOEJkYYJia4XG+EtXIFk5OqD8KLSDI+D8JC8/5ioPcgdI+dnRUuOAhSIcc+u2S/Qq1W22cicnXJO+4RS1N+yv/ZMTVyOGmuzeS65jSTj6cER/dEAI+lrL229deMJ66RPsNOuTnmOTcPQxeoqgi+F74wRzSlj1miwmhxQ3iaKJaKbRP3HLYYgpKsUX7V5CnjzijorEcW6rzpFSva6VrUtXiIo5JP+b2tSlSxmaaspfIKxQR6xuYDNBtIz/0hnV288ouD28pUU2QhsR7Rb9w2MPOcIqkECEtc1IjQZs6F2Wy8asv5+Fcse8P759K/6wjoqYU2Z9xxwr6338yEw/IuyAENJrYTVD/dIVS8U8WfH6pTbGIUODiCJslIYAorDDceB1h1LwU0/23PkZEltcPYEunFSAnh+aRfIAsZG44WNgNEEZAiH3EtTLQmZ8uC386YoPXWSgvpfAqhAeRTCFvT8wCRpWkKEGSYzvxowCaao5pJ+C/WhANLGyAUOBNqEsT+MF2IhC1OJ5z2eO+jEtE1ahtBDahCE01+YD3IgJLOt4Vm2DCQCoRyVNyAHkSwHAjYjpU1AdDAA4eoFtPVWkl/uU5815Q7gMqlPM7ku84CBAfBkn0eACrOkHB2xxLqN1OYNvgzkTsJoB3Rkv/vj9j77XgI4NrmxA1yogsI7hjx4okqCK8OCvzb/6XwTXOYlK4tBdZ0JMnbmKBCOXhSCa+6vNr/pf1FTBuCHreuFCjdQh+6nYR+MukwtailAcbFkPAjFMqnHosMtiKHMC3yH7qaBHiYAJUhAD3zAiPR4EYkj8b1CiF5x2i8/TWNv+ayh9KrRabJ68QKc8uAmD6JnQH1euXOmvarC3JTSiQuow7xBGxtGlGBP7PPVvm1Z5cbAJk4ra1wvO/doiDFu/+uNC78NVuN9ZycpwrAlVcTA0nRfEzdOYVTrchBN9c0Pbv29e4dj8HY4rHMzDysNuxDgjJLiUsYH9U6FDxM2qm35THGaCBIah/zN/5n5vXXHQ+j3nOe8G5jzM89ds+YzzjnKA37sEwr1xqwOkeIuCznVSAdVfKKTt/vbHz3/8NlWcmpqyCZLfi1PseEmDb4vD3XSGt5pFf0yo5YDpRcFSqLYfzHQPorbQTrqqpeuV09P37z58eP/x43WKjx/ff/jw7v3paaWe1lbh25BuyhW8o1eEiQ4DWgx4EIkWj2gtRL+H6GhTBIc9EuXFHJLvoW9ZrFIKGLIKghmnCcVOSQ/DnTEh0aSrGsZRw1qQaVNYsOL+KgE17QuhCV2dbz4Om4o+5p4m89fSrGMykC6bXpOl90O4eV2Ie6s0TCMKL8btiSUU5EUBYrNqW73t/5x+vE61y5SjaKauXP94+h/baOR8jYkJ9oziblzBHx+gEYX34vaxkeAUTF8car+QYHf751+utK4IavSKoFDJmV9+3iZh8S/aoZ8JEql4w+ws0t9kEGyhx8pkkWgTshU3NK3XmioWKZXrpx89JKemPp5ep8eKxalWT3NG920g9oJE5e63jtcWh+POeKUOcabgBE2ESN+H9+//fP+OyFxk7T0xFSY9YjDes2PvyNn3H4hERvy3w+ka5h66D9iuXHDHxn4nYY8+w1L2sPXaAHToGgWgUzf8t6MW1pv4F2KCACE4hROVeDt2Fgs1YZdtIyIzhQLBCEAQz/pMeIcOHbURJLwJiUlur/rAtFXCZbyE6uKmEDGKwr3ExMJi5dNBjuoPlgJPotej6s39ug/EAHBjjdpCagr/NH027rf9SY0itYlrYvv9cSD8gfny/hcttEkQ182ZYqh6nuDrHs4JsTsTM2Hbue3cnx+vT01NTfnsBT94/eOfOedit9HAXFO/sEza6jQWJGOTQuUW9T3ddbmlaZXf//rqq79++5UYi+unH4hGPbV42iAGn2jRD6fXibn49Td6+e8VjY8Om0BVjd9ndaocIO3mdGrv+0jEEFfR259Iv9Q6Pe6dCYpz7eCgwXFwIB7m3lyvQ28Ti0FVTUKJeSri9LsAfs0C2qfxlLbHTK4GU6GA0nH5bkklhjzPJ6GC7ug/f8Fub18giGQxmUfjDiwwhswYghbRZOgqZQzzaoDMrJAX7EdQ6KRelwJNpvkad8tDce1d5LTcaucLUV03dD1ayLdb5dPIOw9TbctdDKpM/ZHMUvBu6nhsPqFDVfGS6o1bblkU1z5UysWokUnrBFE9ykF+I0hnjGixXLFF1aVmKBZVZLKFf/zA8Wv6em52zOwznviwRNM/kW6LmvpOqahnDErNSEf9SBuUqJHRi6UONfxb3kKy6LRu/8u2TWK/QQzHUY95h0DxIBcyXCur2jphZ5LBGJpNamTWtdUVXxl4gtIvMJfwvuehYTP0vSVU0YRm4d70c8EmYzM0KLwMo9HCz1ABSyr2Tv2qxgmE+6S/s3hjL6JTkBCNkPMxNPKVTqNTyRs+hmAWHDdPS4ovY+GIl3xKn+3QxH0igA9hx2H9xRjqAsNMpVEu6IVyo5IJxHAGy8FCuYambS+kgii0tbdZxhRsAtJYDB5WIwwNnShSi2GmV8lQwnqm0stYDMkVuoEwTKoxJIGXVBXvGcc3lQ7yOWLoKxtXpQkVDnNyBWM30olUDM5QL9czZpNl6mWdMzRK5IqSATPECg5BynTMCRhkgmg3tT+zjQsF8a7AV52L7nYMI9MlFClDlz6l7Mj/RolcYXR2oyDDsRgaDAGib7s1fgET4FgVn94EhNsEaV2YYSFCO6URyVN2ervuyJ1Rb+uUIb9Cj+Rhhni4B6i9BdSSiwjjLY0Gh2hgnNutMEkrlQzKsFwSGJbKlKFe5VdUduERRdwFA/IpwoguclNIdNH90ormaHCG3RZroWIHY2jU+RWt7qAMgfedxE25AyFW9p3DzSGWJs6tt5mtyDcMpJcanTbzadrrMEPcQEEyg+YmBNiBJNCV8cElnGFRYEhkUbcZ6lzTEIa8lQdmCA1N2UpEksrI4ooGD2Vwhr0y74N1g1uLnm0tetxaGDV+Rbk3KENIsy8E8GrstwA4muAseobLmBzudDKsR5Z1ZimMesm0+CXWYYmmaXXoL5nODiaHGENoRYA9WipRprYyAkpGXLOQRNNE00Vi8toRK3oyao0WcXFajZph2kSDXVFMw/ZQomkgh06Y2ofcRRwziTZCUwoSe5iPlAs7kbYdHxrtSqPRqLRtz1unV5QjedinkdhDaCjIsQQKcpf0kjF8TpcvTWMiR7zsXrqe18XoKUP+E/wavVBP18l1MEPZWwWeKWsgjhlJMxP3Gt3dQoVHuGlsYfKRRMDsCoQh7pcmIKfcETKsc9vmEJhvIWGIVcQfH0IMGVDPG5scADK0PVPUINoJK2BEXMIwpMJq9swMZ1QVOkwBMrRnH/jShBYcg+83KDKGYRVU6gLDTFonMUQmY3CwX/R0pg/Dy+AiMYaECshhtq/Jb0riD4nUY+4Oj/FZNi2aLp9W3r1rNNJra2vpRuPdu8ppmXhyPBOHMcTm1IQQTSOrP4f0HUgYLoJLE6guNTLRYrX3AUlyr6196FWLUUITZnjJl4e1AU4yk/VBDnssFaox7tOEFuC8Zi5frqUDjFaka2U4PmziiyjBVY72kgx0UoZUUiVrKZC85krwARrNnywNSQYQEV9Ypik5HIaAXIELAzkweXlj5/YjjXplt9wqFovtdpv82yrvVuqNiJ3PfwPej4cz8JyJueAMoVwOHh/io99sAf67UqtANSlVKg7YgUKr9I4SPIBvl4yygDkVO8ofjqGky4z5RixNrBCK76i+BKxhlClaI/OOEAT7KB2RRWcDgoJxRoZNyWoK/GU/0YTIPmpYEA7V0fl7aNfAajMAQ0gOL0nmcSMDFwx/RWmPjOZJhFEoVWq1Xq1WKRWiejtPCetRfAkNPmxBexSg7geQQ0iXSsyvZNAmFHpGhK2bjqSJB9NOlznSbeLlkGNdIqLP0Dtla3BAJdRfl0rtoazPyGaX7lcb1WLBKDQyerGbYVom0y3qmQY5ViTn8LWIsgUcoFz0t4dSnyah4EsZZWu67pWqpC/SlKJeNGXSqBd1o1MkR41q6Z6EBepFJeLQKGF/n0bu10l0tyQYDx1XaLaJpqP0Vs9k2GvpPFWqlyvH2I1Y6oAC7lD9/VL5O5DYX1mHutvboVR2eoZerpkMa2XdsA7fxW6UdX1YKfSPLeSSiie9qapBE3hU6FhjGfR/zpA0q8GblogmdmNWomjgIYZFSaqQQxbjEzlGh2ak62ON9TwltVsy9KqZ1zdKVd0o7dI/8usGdiOeoKUOFhTN9I/xZXkayRzvkGxC2LLRKJikXAzNPwoNA1n47J/aJQAOA+zaoxpDno5LYCsgKFAhXdbTVsfUd3e5+0Z/sbpsWkcYyuwvMvW0f66tzyWyboOOvW0XImwAjSgW2nScIWk/qnro8UgBWcYmE3tYKALkS6U5b/kzUX8gV4iw1D7RN1y5RE21U+yyhH4EDu/l2zPA7zNAzls6btFnXQxWoVyBJZzoOJo5DkMZErPR5kMWaYShzIVCjFOQcQvZ2BPtBXjro8HVXrvBGDbyzNBzhtT05xuMYaMN78QjXbCpgFIUZOxJNn4YooKIdxzMXjwrdvh0kwJz1jhD6r4V+GSTThF2vWVCPwM/K8j4oTMGDE7VwVbMUGDZxq9bdWtCjZuhOZ2m3voaug1dsEnhXTVjwp4yJBkDTsqVqUyBY910n7tqdADY6ORZKjiTyZN21TnDWhkMLqSdFDZNfSpvwlZG4KybhCKxiJOwajiuljKGnm8Rm2F00hYIQyPSyutGplQFXW/ZtjNINQLNxRDm04A+4SXZl24mwG9uPC3Va41Io05NYaHA8/zsp16tk+O1eukpRKIpWVUw0wQT0M1A82kkc6KGxN1qrZzXzdSMnWkzkzZ6vlyrosHFgAg2J8ppaXDQk7zaSzgmgJMTbGK3xTDfLhZbxWI7bzFkZ6HbpM8BO4uzrFs6r00yN5GBfkkMA3wuSltqp9QjfnYm0ujUKToN4ucY5NgObd3oAKWZ56CqBZybKJtfyl5UYkwC6GS0SqWtWupRhvboGmXYK1WphFajAUsSTkJVCzi/VDZHmFOU3u3HNp2PQYiV2QRFK09KfyNeKqFK52H020EiWB2CzhGWzPNmwHbGwvDCYKEFiwZ1gaEeNSMNcv7FYEXCSlCYkief5y2Zq8+wFE6N40j5Tn7LGfKIXmDIo37O8Nv+xYgnw2CKIvBcfcl6i6GwZ7qfNHAqCAwLUTMEJr/CrveACLzeQrZmhiGRTCZw+E7u8RDCqO3oNGNhMWwQhjvcnWvk9/oV4jkJViv4mhnJuieGyw8katyHB99ca5gOto+h6ZI38t8MViQ4UDvAuifJ2jWO2XBKgrDn7Pc80GUZ7rzAMM+y4Dw0/l5ehOcsLDwDrF2TrD8cBvd4nptSIlG9PfuSzpzN89C418Lz+oEx0PpDfA2pCSIMMnPsPnls6xOr0aJWk9o66FhWgLd0WFEOtIZUsg6YY2kQoXnF06JsBm3LHizlgxacYan6ahA5hLPZTpWDbL+Hr+W2ilPUoHjwkNt1nZh4vVWzGdYIQ53Niia+wMMHgctD0lMDruXG1+ObSMwkZXCdtfJrdC7pTsVmWNnRzXnfNO+G3u0vG+6kA67Hl+ypMDh0M7+WzkTtgRnTAcikzbybftaHDLqngmRfDBOXies2i4E5Xdbvs0ynRJlW8TKk2oevxpi1r6f+Gl5yKgxPWhp4Xwx8bxML42pMhrj1i/qcmQliGYihsAdm+NAMMRn8VMN4rvruBKHCFnrwvU0k+9OYmJldnJdg0T77bz6xlKXwCS07PqRkjW7RFNF/+28Ei52FhWaI/WmEXXskI1xBkCMRE81glHs0IOzU6vVup1uv1zo0XOyV2QSbtN53G0V5bYX9IQPXFt0nysbk5GUJJq3T30UjpXojkm6QXqm3yzstOrWt1dopt8nf1UY60qiXItHvPHdhhcJVGWafKHyvLxuXFJlRVMyzD36K1qo0LcoWdbvmtdG/aQqnVa1Ff3rgugsrEwxYh9zrC92vzcG4XCvE4/T09DfWRC/GKFoo5CkKhajJkE8B+2bavkOivbANnIbbdK//TnbJheaEDPzs36NGoVgu1TrEKho90ls50hEil3qrUyuViwUj+nfhDrS8BbgzDbvnntiIZ9mj+16Rziyttui6XxInmVPZMxkaU+nleqtKZ5kWzxJcDLtvIrz3pRtzsqytmbv9W6tGSOkZ6mmbiw0ZGMNWPUM6aqbW+luAkhBTPvzel+D+pd6XIDXPFA/um8ETJWca/6hp5qPmKDDxb+4/6FsSUv0z7F8K7UHrxZwStzFNEPdh+uHuLmeY56kLCyyhkecMd3cfQre6CkS3bzrDHrT+fYT9mMha+NfLV/cff5v1Yj5TYqEFI5dxMcyYNOn64My8785vH99/9fJf9p9ITHSmfYTdGy1vS79nkDu+VllPdzf9Y506D54ykSiwHj/KZmmQ8MkfXOxvdtPrlWvAx4QELG+LVRzicyzCiOP0/cIJvKplaS63b5S7fMp967tJN/6h88XamYgBMDQ4w1Zd/4fnvu9avMBu2djPkWdAj86dFO5PO310qA9bC/mr59FeuXB81fNpiu3cPx8Vyj171UTnvjtaV56b+pOOxPhXOrOjTOE8dzszD+537TLJcx/9M+ce2ljOXT0mz40+d1TFcMOdgsWYvnMtElmvEHfy6fHJ/tdff71/7/hutFitrbsWvxh3XMMa8Tum/tQ5Q2G1OmdoLfX23eZaarNeqxajd4/vseeeHD8lDm6FPPfaHacJh00LCt9GmP6+ai7+WO/2arVevbPuXxHTzd93JZUe3OFRLlcsuouhbqseEh3fcd92P9/1la2td+r0wV3rudXvhT469Dc8hO9bTL/qeZ5ZojnPnZpwpNDYybmSf3s6G5fhlk9cjZehDM0ubET0PddduZ1GQSi1tkNzrSXP03uvHIJncLtc3yhxd51ItNyIRBq9sk5/UjQKu5F197SDZ5yhOYfNxTAatUJgwtA9aejpemS3YBW6o5d79EHlqOvpaUOo2VlS1xMeUXRQtl9qLZ/fqVZ38vk6+WPzTthMzdNbXvKJiTxTWnAxLFhZUzo98SVvD37nnU1STt0q1O4jpbL4eJcQnukbeoI+nX4pPkN8pel6rVbnLbz+6gFxRh5Mh5+/uPPtD4/0coZCL/C5JjR4arPwic03KejsbFl/9MO3d148D0+ze1+tewv1P7H8UuijZ5s2In7vafpVDX6eiOJPP7z88dXDwrXNzWqpQjRDp5HGFyGm040O0VyVUnVz81rh4asfX/7wUxG5VnhiTRDCs37vyf3NrkzDfshuuyE8Pd2o01gvX4gWN3drXZcNGQDr3druZjFayNOYst4Q30yjvev8nhGF8MxfCBS+uxZ7IYhiph0tFItscgzpc+0WjXNF0mdBg8bGrTbty3QKTrFYiLYzzulrL4Tk0wi+ti58O2/6m037Ma06ablOp9MIshB2eFjPqLfsQ5vfCEI4irF48fuH049sUWzkPykzL/J2/6g9EgiO5PuH7m9YPrRlLN8BKoLs/axZZzkiGnwdcpigY7/P9YdCbUbzDUt3GOaIYq/lr4h288mBq7q8zgev2YrftdU3BIeHN7W3b2+bJ/m3us1vPR/cOEQotmyPShTCUX2H1PUt2emfbFEs+CVQux3aMGutvV1d1bSNlQ2NrmN+qwnLfY/oFuya9pauhb65sXVb014zmq9DW6HXIMW07cZt/iSY+hF+Rl7wbR48rpgPK1U99FizrN7WXm8c3aDbOq9o2hHde/6QfcyZfm98YyUUWiGkNwhL+mnnN3Tn4Lf0E8gb9II3B4dvNKirVy0PqvL4gUNwpB+RF7/pbItiVCBH8Jq8f1LXLdZWh3R5b0Sgwq9iBx3ih/SbCAeaxjbmZZt5s7Y88FK0niQK4ag/Ie98lzv+wuoyZUuxarefbNHvwW/Ruh9pbMPjg0Nad9IdN45WnK+qU0LkB/t4/Apt2lu0v67Rb0Xwo/TL3Vt0swLtwGnKWtn8pfDCmUU68g/IO99Wt0XRDnLY26c98DbdKpd/d/voLe1/1s65qw7DNWELhdvkFZC+fJsu+ibiurJBP9hCma4S1iu22rEiDUEIP+3n46ctUWybBoP2yyf0n9u8122EtlboRwAOKcPDw0Pzs/GcYYTtar11cJv8/pr315v0UkL7xg3WW+n7ocfemgw7bUsIPylButzCK4p1y0smldpY3aC99A1vuY3X9I4nvBMesE5oMeRbr9/S+MtgDJm6If+Q/4+YjiXcbzjbghfrXiGEF1ycHba6sUUxahoM6wscG7R6q0yN0u3Vb7A2o2Jmbn/NGDOGTNmG1ug/N+gmyaxrb23RQ09ob72xxdQrRTrqFcJRKxkHttGwRLFiZW9IRW9GCKnDCK38E1rjW1TzcFV5dGS14ZtblOva1sYqu4Cw5yL5xt5Z4SbtATeJTbE3Ba9WPEI4WjPhhm36p3/cXSeRTlQ3Ga5SmbpBa0rNxRvG6xbxUNaYi+N4Y+Zvjr9D+vWtra2b9EMzG9ptJrGUG2fN79GjJCJb3/3RJjhCQ+/HZMzsKbHHJFp9Mf1fbjCoXqCNQfTixsYN7eC1m5cU3FONHNx8bRpK3s9DlntT++/0CxJVPzadtXhsZK4ajKQVaUxPT5NnPjfd1DVKb+NJxHSqh/g4AlFIK1tvtYO3B7eObrPPsZmFXHtO3id5mkkwPCJnG8fYrPi90+lHXbObvtUCthlK8SYVQjPw0G4dmYqmKwRLxErMjiRc6oOm+I3ZO5tWE5yFHS/i4K2zY5b9ujbFhDi60f6IMRkXYuKHfWJ8bX2926Xp6oobNHHe7a67UufAW0o/FOLd+CcWQQeJccGF2/VXiyX/6cZQ7ULm7tPjEzrUcdULOghxcvz0boYmeXYrXWCYgGBXcNTGz5hVGwgTit2MurtKjW6l2ircPd6/upeTDzvaWN7O7V3dP75baFUrXU82S7cb8FNaQQjJlNmM09+X1tNaOt1gqcBr+tOTq7lB1/lY2M5dPXmqX2MJyUaalLpessZf1NQn16E+TKi8GZ8/fnX/4cP79x8RA3knNXHWiiQnUneI+Xt0nxb66vHz82lAsy7jimUZTcTi8ZgyvjS8uCSWxhVaiFMkV6Hjn78BOebcn1y3nA5l9tIwNUpemlVicX+BsfBQQ9ijwVhThRazEZKp5uQgtnlsspkC6YXjavNzGHkciXkFqhexXWp8vDkXpC2Tc81xcjVcjDL/OU0EUsFFmCNjqcRmF5Yuo/sdX15amI0pCDvKb/G8BNCNGZSjSVNRwuOL2ebEpaU5iqVLE83s4niYTijFyHF+Z14rMDLMzMcAneMmSlSkGoupKv2Hzibtsxo1Fpv/cvhRJJphUOkMh7gaBpeknzPmiLIfCT9ibs7RPkhB/BGJRAZsPuXsftEnxcxCGLZrgdjFlPDClyV9IGaI8R5CJonOTcl2FvmykJjLplSZJfCQi6tqKjv3BeoWKYirMhtWqGGQcoupSng2mPPzRSI5OZGdZaadrahwQIwidQRmsxOT/7PkBIwlZyaXiB8zv8gxT/ybpcmZ5Pm61Be4wAUucIELXOACF/iC8P+5LvhoUvpwUwAAAABJRU5ErkJggg=='
 }
const soviet_union = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/250px-Flag_of_the_Soviet_Union.svg.png'
}
const nazi_germany = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Flag_of_the_German_Reich_%281935%E2%80%931945%29.svg/250px-Flag_of_the_German_Reich_%281935%E2%80%931945%29.svg.png'
}
const portugal = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/180px-Flag_of_Portugal.svg.png'
}
const argentina = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/180px-Flag_of_Argentina.svg.png'
}
const chinadog = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/180px-Flag_of_the_People%27s_Republic_of_China.svg.png'
}
const vietnam = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/180px-Flag_of_Vietnam.svg.png'
}
const vietcong = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_South_Vietnam.svg/250px-Flag_of_South_Vietnam.svg.png'
}
const thanhhoa = {
  uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/FLC_Thanh_Hoa.svg/220px-FLC_Thanh_Hoa.svg.png'
}
export default App;