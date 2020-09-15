﻿<!--
/* PCAS (Province City Area Selector 、、地联动选择JS封装类) Ver 2.01 完整版 *\

　制作时间:2005-12-30
　更新时间:2006-01-24
　数据修正:2006-08-17
　文档大小:18KB
　演示地址:http://www.popub.net/script/pcasunzip.html
　下载地址:http://www.popub.net/script/pcasunzip.js
　应用说明:页面包含<script type="text/javascript" src="pcasunzip.js"></script>
	

\***  ***/


SPT="           ";
SCT="           ";
SAT="           ";
ShowT=1;		//提示文字 0:不显示 1:显示
PCAD="北京$辖,东城,西城,崇文,宣武,朝阳,丰台,石景山,海淀,门头沟,房山,通州,顺义,昌平,大兴,怀柔,平谷|辖,密云,延庆#天津$辖,和平,河东,河西,南开,河北,红桥,塘沽,汉沽,大港,东丽,西青,津南,北辰,武清,宝坻|辖,宁河,静海,蓟#河北$石家庄,辖,长安,桥东,桥西,新华,井陉矿,裕华,井陉,正定,栾城,行唐,灵寿,高邑,深泽,赞皇,无极,平山,元氏,赵,辛集,藁城,晋州,新乐,鹿泉|唐山,辖,路南,路北,古冶,开平,丰南,丰润,滦,滦南,乐亭,迁西,玉田,唐海,遵化,迁安|秦皇岛,辖,海港,山海关,北戴河,青龙满族自治,昌黎,抚宁,卢龙|邯郸,辖,邯山,丛台,复兴,峰峰矿,邯郸,临漳,成安,大名,涉,磁,肥乡,永年,邱,鸡泽,广平,馆陶,魏,曲周,武安|邢台,辖,桥东,桥西,邢台,临城,内丘,柏乡,隆尧,任,南和,宁晋,巨鹿,新河,广宗,平乡,威,清河,临西,南宫,沙河|保定,辖,新,北,南,满城,清苑,涞水,阜平,徐水,定兴,唐,高阳,容城,涞源,望都,安新,易,曲阳,蠡,顺平,博野,雄,涿州,定州,安国,高碑店|张家口,辖,桥东,桥西,宣化,下花园,宣化,张北,康保,沽源,尚义,蔚,阳原,怀安,万全,怀来,涿鹿,赤城,崇礼|承德,辖,双桥,双滦,鹰手营子矿,承德,兴隆,平泉,滦平,隆化,丰宁满族自治,宽城满族自治,围场满族蒙古族自治|沧州,辖,新华,运河,沧,青,东光,海兴,盐山,肃宁,南皮,吴桥,献,孟村回族自治,泊头,任丘,黄骅,河间|廊坊,辖,安次,广阳,固安,永清,香河,大城,文安,大厂回族自治,霸州,三河|衡水,辖,桃城,枣强,武邑,武强,饶阳,安平,故城,景,阜城,冀州,深州#山西$太原,辖,小店,迎泽,杏花岭,尖草坪,万柏林,晋源,清徐,阳曲,娄烦,古交|大同,辖,城,矿,南郊,新荣,阳高,天镇,广灵,灵丘,浑源,左云,大同|阳泉,辖,城,矿,郊,平定,盂|长治,辖,城,郊,长治,襄垣,屯留,平顺,黎城,壶关,长子,武乡,沁,沁源,潞城|晋城,辖,城,沁水,阳城,陵川,泽州,高平|朔州,辖,朔城,平鲁,山阴,应,右玉,怀仁|晋中,辖,榆次,榆社,左权,和顺,昔阳,寿阳,太谷,祁,平遥,灵石,介休|运城,辖,盐湖,临猗,万荣,闻喜,稷山,新绛,绛,垣曲,夏,平陆,芮城,永济,河津|忻州,辖,忻府,定襄,五台,代,繁峙,宁武,静乐,神池,五寨,岢岚,河曲,保德,偏关,原平|临汾,辖,尧都,曲沃,翼城,襄汾,洪洞,古,安泽,浮山,吉,乡宁,大宁,隰,永和,蒲,汾西,侯马,霍州|吕梁,辖,离石,文水,交城,兴,临,柳林,石楼,岚,方山,中阳,交口,孝义,汾阳#内蒙古自治$呼和浩特,辖,新城,回民,玉泉,赛罕,土默特左旗,托克托,和林格尔,清水河,武川|包头,辖,东河,昆都仑,青山,石拐,白云矿,九原,土默特右旗,固阳,达尔罕茂明安联合旗|乌海,辖,海勃湾,海南,乌达|赤峰,辖,红山,元宝山,松山,阿鲁科尔沁旗,巴林左旗,巴林右旗,林西,克什克腾旗,翁牛特旗,喀喇沁旗,宁城,敖汉旗|通辽,辖,科尔沁,科尔沁左翼中旗,科尔沁左翼后旗,开鲁,库伦旗,奈曼旗,扎鲁特旗,霍林郭勒|鄂尔多斯,东胜,达拉特旗,准格尔旗,鄂托克前旗,鄂托克旗,杭锦旗,乌审旗,伊金霍洛旗|呼伦贝尔,辖,海拉尔,阿荣旗,莫力达瓦达斡尔族自治旗,鄂伦春自治旗,鄂温克族自治旗,陈巴尔虎旗,新巴尔虎左旗,新巴尔虎右旗,满洲里,牙克石,扎兰屯,额尔古纳,根河|巴彦淖尔,辖,临河,五原,磴口,乌拉特前旗,乌拉特中旗,乌拉特后旗,杭锦后旗|乌兰察布,辖,集宁,卓资,化德,商都,兴和,凉城,察哈尔右翼前旗,察哈尔右翼中旗,察哈尔右翼后旗,四子王旗,丰镇|兴安盟,乌兰浩特,阿尔山,科尔沁右翼前旗,科尔沁右翼中旗,扎赉特旗,突泉|锡林郭勒盟,二连浩特,锡林浩特,阿巴嘎旗,苏尼特左旗,苏尼特右旗,东乌珠穆沁旗,西乌珠穆沁旗,太仆寺旗,镶黄旗,正镶白旗,正蓝旗,多伦|阿拉善盟,阿拉善左旗,阿拉善右旗,额济纳旗#辽宁$沈阳,辖,和平,沈河,大东,皇姑,铁西,苏家屯,东陵,新城子,于洪,辽中,康平,法库,新民|大连,辖,中山,西岗,沙河口,甘井子,旅顺口,金州,长海,瓦房店,普兰店,庄河|鞍山,辖,铁东,铁西,立山,千山,台安,岫岩满族自治,海城|抚顺,辖,新抚,东洲,望花,顺城,抚顺,新宾满族自治,清原满族自治|本溪,辖,平山,溪湖,明山,南芬,本溪满族自治,桓仁满族自治|丹东,辖,元宝,振兴,振安,宽甸满族自治,东港,凤城|锦州,辖,古塔,凌河,太和,黑山,义,凌海,北宁|营口,辖,站前,西,鲅鱼圈,老边,盖州,大石桥|阜新,辖,海州,新邱,太平,清河门,细河,阜新蒙古族自治,彰武|辽阳,辖,白塔,文圣,宏伟,弓长岭,太子河,辽阳,灯塔|盘锦,辖,双台子,兴隆台,大洼,盘山|铁岭,辖,银州,清河,铁岭,西丰,昌图,调兵山,开原|朝阳,辖,双塔,龙城,朝阳,建平,喀喇沁左翼蒙古族自治,北票,凌源|葫芦岛,辖,连山,龙港,南票,绥中,建昌,兴城#吉林$长春,辖,南关,宽城,朝阳,二道,绿园,双阳,农安,九台,榆树,德惠|吉林,辖,昌邑,龙潭,船营,丰满,永吉,蛟河,桦甸,舒兰,磐石|四平,辖,铁西,铁东,梨树,伊通满族自治,公主岭,双辽|辽源,辖,龙山,西安,东丰,东辽|通化,辖,东昌,二道江,通化,辉南,柳河,梅河口,集安|白山,辖,八道江,抚松,靖宇,长白朝鲜族自治,江源,临江|松原,辖,宁江,前郭尔罗斯蒙古族自治,长岭,乾安,扶余|白城,辖,洮北,镇赉,通榆,洮南,大安|延边朝鲜族自治州,延吉,图们,敦化,珲春,龙井,和龙,汪清,安图#黑龙江$哈尔滨,辖,道里,南岗,道外,香坊,动力,平房,松北,呼兰,依兰,方正,宾,巴彦,木兰,通河,延寿,阿城,双城,尚志,五常|齐齐哈尔,辖,龙沙,建华,铁锋,昂昂溪,富拉尔基,碾子山,梅里斯达斡尔族,龙江,依安,泰来,甘南,富裕,克山,克东,拜泉,讷河|鸡西,辖,鸡冠,恒山,滴道,梨树,城子河,麻山,鸡东,虎林,密山|鹤岗,辖,向阳,工农,南山,兴安,东山,兴山,萝北,绥滨|双鸭山,辖,尖山,岭东,四方台,宝山,集贤,友谊,宝清,饶河|大庆,辖,萨尔图,龙凤,让胡路,红岗,大同,肇州,肇源,林甸,杜尔伯特蒙古族自治|伊春,辖,伊春,南岔,友好,西林,翠峦,新青,美溪,金山屯,五营,乌马河,汤旺河,带岭,乌伊岭,红星,上甘岭,嘉荫,铁力|佳木斯,辖,永红,向阳,前进,东风,郊,桦南,桦川,汤原,抚远,同江,富锦|七台河,辖,新兴,桃山,茄子河,勃利|牡丹江,辖,东安,阳明,爱民,西安,东宁,林口,绥芬河,海林,宁安,穆棱|黑河,辖,爱辉,嫩江,逊克,孙吴,北安,五大连池|绥化,辖,北林,望奎,兰西,青冈,庆安,明水,绥棱,安达,肇东,海伦|大兴安岭地,呼玛,塔河,漠河#上海$辖,黄浦,卢湾,徐汇,长宁,静安,普陀,闸北,虹口,杨浦,闵行,宝山,嘉定,浦东新,金山,松江,青浦,南汇,奉贤|辖,崇明#江苏$南京,辖,玄武,白下,秦淮,建邺,鼓楼,下关,浦口,栖霞,雨花台,江宁,六合,溧水,高淳|无锡,辖,崇安,南长,北塘,锡山,惠山,滨湖,江阴,宜兴|徐州,辖,鼓楼,云龙,九里,贾汪,泉山,丰,沛,铜山,睢宁,新沂,邳州|常州,辖,天宁,钟楼,戚墅堰,新北,武进,溧阳,金坛|苏州,辖,沧浪,平江,金阊,虎丘,吴中,相城,常熟,张家港,昆山,吴江,太仓|南通,辖,崇川,港闸,海安,如东,启东,如皋,通州,海门|连云港,辖,连云,新浦,海州,赣榆,东海,灌云,灌南|淮安,辖,清河,楚州,淮阴,清浦,涟水,洪泽,盱眙,金湖|盐城,辖,亭湖,盐都,响水,滨海,阜宁,射阳,建湖,东台,大丰|扬州,辖,广陵,邗江,维扬,宝应,仪征,高邮,江都|镇江,辖,京口,润州,丹徒,丹阳,扬中,句容|泰州,辖,海陵,高港,兴化,靖江,泰兴,姜堰|宿迁,辖,宿城,宿豫,沭阳,泗阳,泗洪#浙江$杭州,辖,上城,下城,江干,拱墅,西湖,滨江,萧山,余杭,桐庐,淳安,建德,富阳,临安|宁波,辖,海曙,江东,江北,北仑,镇海,鄞州,象山,宁海,余姚,慈溪,奉化|温州,辖,鹿城,龙湾,瓯海,洞头,永嘉,平阳,苍南,文成,泰顺,瑞安,乐清|嘉兴,辖,秀城,秀洲,嘉善,海盐,海宁,平湖,桐乡|湖州,辖,吴兴,南浔,德清,长兴,安吉|绍兴,辖,越城,绍兴,新昌,诸暨,上虞,嵊州|金华,辖,婺城,金东,武义,浦江,磐安,兰溪,义乌,东阳,永康|衢州,辖,柯城,衢江,常山,开化,龙游,江山|舟山,辖,定海,普陀,岱山,嵊泗|台州,辖,椒江,黄岩,路桥,玉环,三门,天台,仙居,温岭,临海|丽水,辖,莲都,青田,缙云,遂昌,松阳,云和,庆元,景宁畲族自治,龙泉#安徽$合肥,辖,瑶海,庐阳,蜀山,包河,长丰,肥东,肥西|芜湖,辖,镜湖,弋江,鸠江,三山,芜湖,繁昌,南陵|蚌埠,辖,龙子湖,蚌山,禹会,淮上,怀远,五河,固镇|淮南,辖,大通,田家庵,谢家集,八公山,潘集,凤台|马鞍山,辖,金家庄,花山,雨山,当涂|淮北,辖,杜集,相山,烈山,濉溪|铜陵,辖,铜官山,狮子山,郊,铜陵|安庆,辖,迎江,大观,宜秀,怀宁,枞阳,潜山,太湖,宿松,望江,岳西,桐城|黄山,辖,屯溪,黄山,徽州,歙,休宁,黟,祁门|滁州,辖,琅琊,南谯,来安,全椒,定远,凤阳,天长,明光|阜阳,辖,颍州,颍东,颍泉,临泉,太和,阜南,颍上,界首|宿州,辖,埇桥,砀山,萧,灵璧,泗|巢湖,辖,居巢,庐江,无为,含山,和|六安,辖,金安,裕安,寿,霍邱,舒城,金寨,霍山|亳州,辖,谯城,涡阳,蒙城,利辛|池州,辖,贵池,东至,石台,青阳|宣城,辖,宣州,郎溪,广德,泾,绩溪,旌德,宁国#福建$福州,辖,鼓楼,台江,仓山,马尾,晋安,闽侯,连江,罗源,闽清,永泰,平潭,福清,长乐|厦门,辖,思明,海沧,湖里,集美,同安,翔安|莆田,辖,城厢,涵江,荔城,秀屿,仙游|三明,辖,梅列,三元,明溪,清流,宁化,大田,尤溪,沙,将乐,泰宁,建宁,永安|泉州,辖,鲤城,丰泽,洛江,泉港,惠安,安溪,永春,德化,金门,石狮,晋江,南安|漳州,辖,芗城,龙文,云霄,漳浦,诏安,长泰,东山,南靖,平和,华安,龙海|南平,辖,延平,顺昌,浦城,光泽,松溪,政和,邵武,武夷山,建瓯,建阳|龙岩,辖,新罗,长汀,永定,上杭,武平,连城,漳平|宁德,辖,蕉城,霞浦,古田,屏南,寿宁,周宁,柘荣,福安,福鼎#江西$南昌,辖,东湖,西湖,青云谱,湾里,青山湖,南昌,新建,安义,进贤|景德镇,辖,昌江,珠山,浮梁,乐平|萍乡,辖,安源,湘东,莲花,上栗,芦溪|九江,辖,庐山,浔阳,九江,武宁,修水,永修,德安,星子,都昌,湖口,彭泽,瑞昌|新余,辖,渝水,分宜|鹰潭,辖,月湖,余江,贵溪|赣州,辖,章贡,赣,信丰,大余,上犹,崇义,安远,龙南,定南,全南,宁都,于都,兴国,会昌,寻乌,石城,瑞金,南康|吉安,辖,吉州,青原,吉安,吉水,峡江,新干,永丰,泰和,遂川,万安,安福,永新,井冈山|宜春,辖,袁州,奉新,万载,上高,宜丰,靖安,铜鼓,丰城,樟树,高安|抚州,辖,临川,南城,黎川,南丰,崇仁,乐安,宜黄,金溪,资溪,东乡,广昌|上饶,辖,信州,上饶,广丰,玉山,铅山,横峰,弋阳,余干,鄱阳,万年,婺源,德兴#山东$济南,辖,历下,中,槐荫,天桥,历城,长清,平阴,济阳,商河,章丘|青岛,辖,南,北,四方,黄岛,崂山,李沧,城阳,胶州,即墨,平度,胶南,莱西|淄博,辖,淄川,张店,博山,临淄,周村,桓台,高青,沂源|枣庄,辖,中,薛城,峄城,台儿庄,山亭,滕州|东营,辖,东营,河口,垦利,利津,广饶|烟台,辖,芝罘,福山,牟平,莱山,长岛,龙口,莱阳,莱州,蓬莱,招远,栖霞,海阳|潍坊,辖,潍城,寒亭,坊子,奎文,临朐,昌乐,青州,诸城,寿光,安丘,高密,昌邑|济宁,辖,中,任城,微山,鱼台,金乡,嘉祥,汶上,泗水,梁山,曲阜,兖州,邹城|泰安,辖,泰山,岱岳,宁阳,东平,新泰,肥城|威海,辖,环翠,文登,荣成,乳山|日照,辖,东港,岚山,五莲,莒|莱芜,辖,莱城,钢城|临沂,辖,兰山,罗庄,河东,沂南,郯城,沂水,苍山,费,平邑,莒南,蒙阴,临沭|德州,辖,德城,陵,宁津,庆云,临邑,齐河,平原,夏津,武城,乐陵,禹城|聊城,辖,东昌府,阳谷,莘,茌平,东阿,冠,高唐,临清|滨州,辖,滨城,惠民,阳信,无棣,沾化,博兴,邹平|菏泽,辖,牡丹,曹,单,成武,巨野,郓城,鄄城,定陶,东明#河南$郑州,辖,中原,二七,管城回族,金水,上街,惠济,中牟,巩义,荥阳,新密,新郑,登封|开封,辖,龙亭,顺河回族,鼓楼,禹王台,金明,杞,通许,尉氏,开封,兰考|洛阳,辖,老城,西工,廛河回族,涧西,吉利,洛龙,孟津,新安,栾川,嵩,汝阳,宜阳,洛宁,伊川,偃师|平顶山,辖,新华,卫东,石龙,湛河,宝丰,叶,鲁山,郏,舞钢,汝州|安阳,辖,文峰,北关,殷都,龙安,安阳,汤阴,滑,内黄,林州|鹤壁,辖,鹤山,山城,淇滨,浚,淇|新乡,辖,红旗,卫滨,凤泉,牧野,新乡,获嘉,原阳,延津,封丘,长垣,卫辉,辉|焦作,辖,解放,中站,马村,山阳,修武,博爱,武陟,温,济源,沁阳,孟州|濮阳,辖,华龙,清丰,南乐,范,台前,濮阳|许昌,辖,魏都,许昌,鄢陵,襄城,禹州,长葛|漯河,辖,源汇,郾城,召陵,舞阳,临颍|三门峡,辖,湖滨,渑池,陕,卢氏,义马,灵宝|南阳,辖,宛城,卧龙,南召,方城,西峡,镇平,内乡,淅川,社旗,唐河,新野,桐柏,邓州|商丘,辖,梁园,睢阳,民权,睢,宁陵,柘城,虞城,夏邑,永城|信阳,辖,浉河,平桥,罗山,光山,新,商城,固始,潢川,淮滨,息|周口,辖,川汇,扶沟,西华,商水,沈丘,郸城,淮阳,太康,鹿邑,项城|驻马店,辖,驿城,西平,上蔡,平舆,正阳,确山,泌阳,汝南,遂平,新蔡#湖北$武汉,辖,江岸,江汉,硚口,汉阳,武昌,青山,洪山,东西湖,汉南,蔡甸,江夏,黄陂,新洲|黄石,辖,黄石港,西塞山,下陆,铁山,阳新,大冶|十堰,辖,茅箭,张湾,郧,郧西,竹山,竹溪,房,丹江口|宜昌,辖,西陵,伍家岗,点军,猇亭,夷陵,远安,兴山,秭归,长阳土家族自治,五峰土家族自治,宜都,当阳,枝江|襄樊,辖,襄城,樊城,襄阳,南漳,谷城,保康,老河口,枣阳,宜城|鄂州,辖,梁子湖,华容,鄂城|荆门,辖,东宝,掇刀,京山,沙洋,钟祥|孝感,辖,孝南,孝昌,大悟,云梦,应城,安陆,汉川|荆州,辖,沙,荆州,公安,监利,江陵,石首,洪湖,松滋|黄冈,辖,黄州,团风,红安,罗田,英山,浠水,蕲春,黄梅,麻城,武穴|咸宁,辖,咸安,嘉鱼,通城,崇阳,通山,赤壁|随州,辖,曾都,广水|恩施土家族苗族自治州,恩施,利川,建始,巴东,宣恩,咸丰,来凤,鹤峰|直辖行政单位,仙桃,潜江,天门,神农架林#湖南$长沙,辖,芙蓉,天心,岳麓,开福,雨花,长沙,望城,宁乡,浏阳|株洲,辖,荷塘,芦淞,石峰,天元,株洲,攸,茶陵,炎陵,醴陵|湘潭,辖,雨湖,岳塘,湘潭,湘乡,韶山|衡阳,辖,珠晖,雁峰,石鼓,蒸湘,南岳,衡阳,衡南,衡山,衡东,祁东,耒阳,常宁|邵阳,辖,双清,大祥,北塔,邵东,新邵,邵阳,隆回,洞口,绥宁,新宁,城步苗族自治,武冈|岳阳,辖,岳阳楼,云溪,君山,岳阳,华容,湘阴,平江,汨罗,临湘|常德,辖,武陵,鼎城,安乡,汉寿,澧,临澧,桃源,石门,津|张家界,辖,永定,武陵源,慈利,桑植|益阳,辖,资阳,赫山,南,桃江,安化,沅江|郴州,辖,北湖,苏仙,桂阳,宜章,永兴,嘉禾,临武,汝城,桂东,安仁,资兴|永州,辖,零陵,冷水滩,祁阳,东安,双牌,道,江永,宁远,蓝山,新田,江华瑶族自治|怀化,辖,鹤城,中方,沅陵,辰溪,溆浦,会同,麻阳苗族自治,新晃侗族自治,芷江侗族自治,靖州苗族侗族自治,通道侗族自治,洪江|娄底,辖,娄星,双峰,新化,冷水江,涟源|湘西土家族苗族自治州,吉首,泸溪,凤凰,花垣,保靖,古丈,永顺,龙山#广东$广州,辖,荔湾,越秀,海珠,天河,白云,黄埔,番禺,花都,南沙,萝岗,增城,从化|韶关,辖,武江,浈江,曲江,始兴,仁化,翁源,乳源瑶族自治,新丰,乐昌,南雄|深圳,辖,罗湖,福田,南山,宝安,龙岗,盐田|珠海,辖,香洲,斗门,金湾|汕头,辖,龙湖,金平,濠江,潮阳,潮南,澄海,南澳|佛山,辖,禅城,南海,顺德,三水,高明|江门,辖,蓬江,江海,新会,台山,开平,鹤山,恩平|湛江,辖,赤坎,霞山,坡头,麻章,遂溪,徐闻,廉江,雷州,吴川|茂名,辖,茂南,茂港,电白,高州,化州,信宜|肇庆,辖,端州,鼎湖,广宁,怀集,封开,德庆,高要,四会|惠州,辖,惠城,惠阳,博罗,惠东,龙门|梅州,辖,梅江,梅,大埔,丰顺,五华,平远,蕉岭,兴宁|汕尾,辖,城,海丰,陆河,陆丰|河源,辖,源城,紫金,龙川,连平,和平,东源|阳江,辖,江城,阳西,阳东,阳春|清远,辖,清城,佛冈,阳山,连山壮族瑶族自治,连南瑶族自治,清新,英德,连州|东莞|中山|潮州,辖,湘桥,潮安,饶平|揭阳,辖,榕城,揭东,揭西,惠来,普宁|云浮,辖,云城,新兴,郁南,云安,罗定#广西壮族自治$南宁,辖,兴宁,青秀,江南,西乡塘,良庆,邕宁,武鸣,隆安,马山,上林,宾阳,横|柳州,辖,城中,鱼峰,柳南,柳北,柳江,柳城,鹿寨,融安,融水苗族自治,三江侗族自治|桂林,辖,秀峰,叠彩,象山,七星,雁山,阳朔,临桂,灵川,全州,兴安,永福,灌阳,龙胜各族自治,资源,平乐,荔蒲,恭城瑶族自治|梧州,辖,万秀,蝶山,长洲,苍梧,藤,蒙山,岑溪|北海,辖,海城,银海,铁山港,合浦|防城港,辖,港口,防城,上思,东兴|钦州,辖,钦南,钦北,灵山,浦北|贵港,辖,港北,港南,覃塘,平南,桂平|玉林,辖,玉州,容,陆川,博白,兴业,北流|百色,辖,右江,田阳,田东,平果,德保,靖西,那坡,凌云,乐业,田林,西林,隆林各族自治|贺州,辖,八步,昭平,钟山,富川瑶族自治|河池,辖,金城江,南丹,天峨,凤山,东兰,罗城仫佬族自治,环江毛南族自治,巴马瑶族自治,都安瑶族自治,大化瑶族自治,宜州|来宾,辖,兴宾,忻城,象州,武宣,金秀瑶族自治,合山|崇左,辖,江洲,扶绥,宁明,龙州,大新,天等,凭祥#海南$海口,辖,秀英,龙华,琼山,美兰|三亚,辖|直辖级行政单位,五指山,琼海,儋州,文昌,万宁,东方,定安,屯昌,澄迈,临高,白沙黎族自治,昌江黎族自治,乐东黎族自治,陵水黎族自治,保亭黎族苗族自治,琼中黎族苗族自治,西沙群岛,南沙群岛,中沙群岛的岛礁及其海域#重庆$辖,万州,涪陵,渝中,大渡口,江北,沙坪坝,九龙坡,南岸,北碚,万盛,双桥,渝北,巴南,黔江,长寿|辖,綦江,潼南,铜梁,大足,荣昌,璧山,梁平,城口,丰都,垫江,武隆,忠,开,云阳,奉节,巫山,巫溪,石柱土家族自治,秀山土家族苗族自治,酉阳土家族苗族自治,彭水苗族土家族自治|级,江津,合川,永川,南川#四川$成都,辖,锦江,青羊,金牛,武侯,成华,龙泉驿,青白江,新都,温江,金堂,双流,郫,大邑,蒲江,新津,都江堰,彭州,邛崃,崇州|自贡,辖,自流井,贡井,大安,沿滩,荣,富顺|攀枝花,辖,东,西,仁和,米易,盐边|泸州,辖,江阳,纳溪,龙马潭,泸,合江,叙永,古蔺|德阳,辖,旌阳,中江,罗江,广汉,什邡,绵竹|绵阳,辖,涪城,游仙,三台,盐亭,安,梓潼,北川羌族自治,平武,江油|广元,辖,中,元坝,朝天,旺苍,青川,剑阁,苍溪|遂宁,辖,船山,安居,蓬溪,射洪,大英|内江,辖,中,东兴,威远,资中,隆昌|乐山,辖,中,沙湾,五通桥,金口河,犍为,井研,夹江,沐川,峨边彝族自治,马边彝族自治,峨眉山|南充,辖,顺庆,高坪,嘉陵,南部,营山,蓬安,仪陇,西充,阆中|眉山,辖,东坡,仁寿,彭山,洪雅,丹棱,青神|宜宾,辖,翠屏,宜宾,南溪,江安,长宁,高,珙,筠连,兴文,屏山|广安,辖,广安,岳池,武胜,邻水,华蓥|达州,辖,通川,达,宣汉,开江,大竹,渠,万源|雅安,辖,雨城,名山,荥经,汉源,石棉,天全,芦山,宝兴|巴中,辖,巴州,通江,南江,平昌|资阳,辖,雁江,安岳,乐至,简阳|阿坝藏族羌族自治州,汶川,理,茂,松潘,九寨沟,金川,小金,黑水,马尔康,壤塘,阿坝,若尔盖,红原|甘孜藏族自治州,康定,泸定,丹巴,九龙,雅江,道孚,炉霍,甘孜,新龙,德格,白玉,石渠,色达,理塘,巴塘,乡城,稻城,得荣|凉山彝族自治州,西昌,木里藏族自治,盐源,德昌,会理,会东,宁南,普格,布拖,金阳,昭觉,喜德,冕宁,越西,甘洛,美姑,雷波#贵州$贵阳,辖,南明,云岩,花溪,乌当,白云,小河,开阳,息烽,修文,清镇|六盘水,钟山,六枝特,水城,盘|遵义,辖,红花岗,汇川,遵义,桐梓,绥阳,正安,道真仡佬族苗族自治,务川仡佬族苗族自治,凤冈,湄潭,余庆,习水,赤水,仁怀|安顺,辖,西秀,平坝,普定,镇宁布依族苗族自治,关岭布依族苗族自治,紫云苗族布依族自治|铜仁地,铜仁,江口,玉屏侗族自治,石阡,思南,印江土家族苗族自治,德江,沿河土家族自治,松桃苗族自治,万山特|黔西南布依族苗族自治州,兴义,兴仁,普安,晴隆,贞丰,望谟,册亨,安龙|毕节地,毕节,大方,黔西,金沙,织金,纳雍,威宁彝族回族苗族自治,赫章|黔东南苗族侗族自治州,凯里,黄平,施秉,三穗,镇远,岑巩,天柱,锦屏,剑河,台江,黎平,榕江,从江,雷山,麻江,丹寨|黔南布依族苗族自治州,都匀,福泉,荔波,贵定,瓮安,独山,平塘,罗甸,长顺,龙里,惠水,三都水族自治#云南$昆明,辖,五华,盘龙,官渡,西山,东川,呈贡,晋宁,富民,宜良,石林彝族自治,嵩明,禄劝彝族苗族自治,寻甸回族彝族自治,安宁|曲靖,辖,麒麟,马龙,陆良,师宗,罗平,富源,会泽,沾益,宣威|玉溪,辖,红塔,江川,澄江,通海,华宁,易门,峨山彝族自治,新平彝族傣族自治,元江哈尼族彝族傣族自治|保山,辖,隆阳,施甸,腾冲,龙陵,昌宁|昭通,辖,昭阳,鲁甸,巧家,盐津,大关,永善,绥江,镇雄,彝良,威信,水富|丽江,辖,古城,玉龙纳西族自治,永胜,华坪,宁蒗彝族自治|思茅,辖,翠云,普洱哈尼族彝族自治,墨江哈尼族自治,景东彝族自治,景谷傣族彝族自治,镇沅彝族哈尼族拉祜族自治,江城哈尼族彝族自治,孟连傣族拉祜族佤族自治,澜沧拉祜族自治,西盟佤族自治|临沧,辖,临翔,凤庆,云,永德,镇康,双江拉祜族佤族布朗族傣族自治,耿马傣族佤族自治,沧源佤族自治|楚雄彝族自治州,楚雄,双柏,牟定,南华,姚安,大姚,永仁,元谋,武定,禄丰|红河哈尼族彝族自治州,个旧,开远,蒙自,屏边苗族自治,建水,石屏,弥勒,泸西,元阳,红河,金平苗族瑶族傣族自治,绿春,河口瑶族自治|文山壮族苗族自治州,文山,砚山,西畴,麻栗坡,马关,丘北,广南,富宁|西双版纳傣族自治州,景洪,勐海,勐腊|大理白族自治州,大理,漾濞彝族自治,祥云,宾川,弥渡,南涧彝族自治,巍山彝族回族自治,永平,云龙,洱源,剑川,鹤庆|德宏傣族景颇族自治州,瑞丽,潞西,梁河,盈江,陇川|怒江傈僳族自治州,泸水,福贡,贡山独龙族怒族自治,兰坪白族普米族自治|迪庆藏族自治州,香格里拉,德钦,维西傈僳族自治#西藏自治$拉萨,辖,城关,林周,当雄,尼木,曲水,堆龙德庆,达孜,墨竹工卡|昌都地,昌都,江达,贡觉,类乌齐,丁青,察雅,八宿,左贡,芒康,洛隆,边坝|山南地,乃东,扎囊,贡嘎,桑日,琼结,曲松,措美,洛扎,加查,隆子,错那,浪卡子|日喀则地,日喀则,南木林,江孜,定日,萨迦,拉孜,昂仁,谢通门,白朗,仁布,康马,定结,仲巴,亚东,吉隆,聂拉木,萨嘎,岗巴|那曲地,那曲,嘉黎,比如,聂荣,安多,申扎,索,班戈,巴青,尼玛|阿里地,普兰,札达,噶尔,日土,革吉,改则,措勤|林芝地,林芝,工布江达,米林,墨脱,波密,察隅,朗#陕西$西安,辖,新城,碑林,莲湖,灞桥,未央,雁塔,阎良,临潼,长安,蓝田,周至,户,高陵|铜川,辖,王益,印台,耀州,宜君|宝鸡,辖,渭滨,金台,陈仓,凤翔,岐山,扶风,眉,陇,千阳,麟游,凤,太白|咸阳,辖,秦都,杨凌,渭城,三原,泾阳,乾,礼泉,永寿,彬,长武,旬邑,淳化,武功,兴平|渭南,辖,临渭,华,潼关,大荔,合阳,澄城,蒲城,白水,富平,韩城,华阴|延安,辖,宝塔,延长,延川,子长,安塞,志丹,吴起,甘泉,富,洛川,宜川,黄龙,黄陵|汉中,辖,汉台,南郑,城固,洋,西乡,勉,宁强,略阳,镇巴,留坝,佛坪|榆林,辖,榆阳,神木,府谷,横山,靖边,定边,绥德,米脂,佳,吴堡,清涧,子洲|安康,辖,汉滨,汉阴,石泉,宁陕,紫阳,岚皋,平利,镇坪,旬阳,白河|商洛,辖,商州,洛南,丹凤,商南,山阳,镇安,柞水#甘肃$兰州,辖,城关,七里河,西固,安宁,红古,永登,皋兰,榆中|嘉峪关,辖|金昌,辖,金川,永昌|白银,辖,白银,平川,靖远,会宁,景泰|天水,辖,秦城,北道,清水,秦安,甘谷,武山,张家川回族自治|武威,辖,凉州,民勤,古浪,天祝藏族自治|张掖,辖,甘州,肃南裕固族自治,民乐,临泽,高台,山丹|平凉,辖,崆峒,泾川,灵台,崇信,华亭,庄浪,静宁|酒泉,辖,肃州,金塔,安西,肃北蒙古族自治,阿克塞哈萨克族自治,玉门,敦煌|庆阳,辖,西峰,庆城,环,华池,合水,正宁,宁,镇原|定西,辖,安定,通渭,陇西,渭源,临洮,漳,岷|陇南,辖,武都,成,文,宕昌,康,西和,礼,徽,两当|临夏回族自治州,临夏,临夏,康乐,永靖,广河,和政,东乡族自治,积石山保安族东乡族撒拉族自治|甘南藏族自治州,合作,临潭,卓尼,舟曲,迭部,玛曲,碌曲,夏河#青海$西宁,辖,城东,城中,城西,城北,大通回族土族自治,湟中,湟源|海东地,平安,民和回族土族自治,乐都,互助土族自治,化隆回族自治,循化撒拉族自治|海北藏族自治州,门源回族自治,祁连,海晏,刚察|黄南藏族自治州,同仁,尖扎,泽库,河南蒙古族自治|海南藏族自治州,共和,同德,贵德,兴海,贵南|果洛藏族自治州,玛沁,班玛,甘德,达日,久治,玛多|玉树藏族自治州,玉树,杂多,称多,治多,囊谦,曲麻莱|海西蒙古族藏族自治州,格尔木,德令哈,乌兰,都兰,天峻#宁夏回族自治$银川,辖,兴庆,西夏,金凤,永宁,贺兰,灵武|石嘴山,辖,大武口,惠农,平罗|吴忠,辖,利通,盐池,同心,青铜峡|固原,辖,原州,西吉,隆德,泾源,彭阳|中卫,辖,沙坡头,中宁,海原#新疆维吾尔自治$乌鲁木齐,辖,天山,沙依巴克,新,水磨沟,头屯河,达坂城,东山,乌鲁木齐|克拉玛依,辖,独山子,克拉玛依,白碱滩,乌尔禾|吐鲁番地,吐鲁番,鄯善,托克逊|哈密地,哈密,巴里坤哈萨克自治,伊吾|昌吉回族自治州,昌吉,阜康,米泉,呼图壁,玛纳斯,奇台,吉木萨尔,木垒哈萨克自治|博尔塔拉蒙古自治州,博乐,精河,温泉|巴音郭楞蒙古自治州,库尔勒,轮台,尉犁,若羌,且末,焉耆回族自治,和静,和硕,博湖|阿克苏地,阿克苏,温宿,库车,沙雅,新和,拜城,乌什,阿瓦提,柯坪|克孜勒苏柯尔克孜自治州,阿图什,阿克陶,阿合奇,乌恰|喀什地,喀什,疏附,疏勒,英吉沙,泽普,莎车,叶城,麦盖提,岳普湖,伽师,巴楚,塔什库尔干塔吉克自治|和田地,和田,和田,墨玉,皮山,洛浦,策勒,于田,民丰|伊犁哈萨克自治州,伊宁,奎屯,伊宁,察布查尔锡伯自治,霍城,巩留,新源,昭苏,特克斯,尼勒克|塔城地,塔城,乌苏,额敏,沙湾,托里,裕民,和布克赛尔蒙古自治|阿勒泰地,阿勒泰,布尔津,富蕴,福海,哈巴河,青河,吉木乃|直辖行政单位,石河子,阿拉尔,图木舒克,五家渠#香港特别行政$香港,香港特别行政#澳门特别行政$澳门,澳门特别行政#台湾$台北,中正,大同,中山,松山,大安,万华,信义,士林,北投,内湖,南港,文山|高雄,新兴,前金,芩雅,盐埕,鼓山,旗津,前镇,三民,左营,楠梓,小港|基隆,仁爱,信义,中正,中山,安乐,暖暖,七堵|台中,中,东,南,西,北,北屯,西屯,南屯|台南,中西,东,南,北,安平,安南|新竹,东,北,香山|嘉义,东,西|,台北(板桥),宜兰(宜兰),新竹(竹北),桃园(桃园),苗栗(苗栗),台中(丰原),彰化(彰化),南投(南投),嘉义(太保),云林(斗六),台南(新营),高雄(凤山),屏东(屏东),台东(台东),花莲(花莲),澎湖(马公)#其它$亚洲,阿富汗,巴林,孟加拉国,不丹,文莱,缅甸,塞浦路斯,印度,印度尼西亚,伊朗,伊拉克,日本,约旦,朝鲜,科威特,老挝,马尔代夫,黎巴嫩,马来西亚,以色列,蒙古,尼泊尔,阿曼,巴基斯坦,巴勒斯坦,菲律宾,沙特阿拉伯,新加坡,斯里兰卡,叙利亚,泰国,柬埔寨,土耳其,阿联酋,越南,也门,韩国,中国,中国香港,中国澳门,中国台湾|非洲,阿尔及利亚,安哥拉,厄里特里亚,法罗群鸟,加那利群岛(西)(拉斯帕尔马斯),贝宁,博茨瓦纳,布基纳法索,布隆迪,喀麦隆,加那利群岛(西)(圣克鲁斯),佛得角,中非,乍得,科摩罗,刚果,吉布提,埃及,埃塞俄比亚,赤道几内亚,加蓬,冈比亚,加纳,几内亚,南非,几内亚比绍,科特迪瓦,肯尼亚,莱索托,利比里亚,利比亚,马达加斯加,马拉维,马里,毛里塔尼亚,毛里求斯,摩洛哥,莫桑比克,尼日尔,尼日利亚,留尼旺岛,卢旺达,塞内加尔,塞舌尔,塞拉利昂,索马里,苏丹,斯威士兰,坦桑尼亚,圣赤勒拿,多哥,突尼斯,乌干达,扎伊尔,赞比亚,津巴布韦,纳米比亚,迪戈加西亚,桑给巴尔,马约特岛,圣多美和普林西比|欧洲,阿尔巴尼亚,安道尔,奥地利,比利时,保加利亚,捷克,丹麦,芬兰,法国,德国,直布罗陀(英),希腊,匈牙利,冰岛,爱尔兰,意大利,列支敦士登,斯洛伐克,卢森堡,马耳他,摩纳哥,荷兰,挪威,波兰,葡萄牙,马其顿,罗马尼亚,南斯拉夫,圣马力诺,西班牙,瑞典,瑞士,英国,科罗地亚,斯洛文尼亚,梵蒂冈,波斯尼亚和塞哥维那,俄罗斯联邦,亚美尼亚共和国,白俄罗斯共和国,格鲁吉亚共和国,哈萨克斯坦共和国,吉尔吉斯坦共和国,乌兹别克斯坦共和国,塔吉克斯坦共和国,土库曼斯坦共和国,乌克兰,立陶宛,拉脱维亚,爱沙尼亚,摩尔多瓦,阿塞拜疆|美洲,安圭拉岛,安提瓜和巴布达,阿根廷,阿鲁巴岛,阿森松,巴哈马,巴巴多斯,伯利兹,百慕大群岛,玻利维亚,巴西,加拿大,开曼群岛,智利,哥伦比亚,多米尼加联邦,哥斯达黎加,古巴,多米尼加共和国,厄瓜多尔,萨尔瓦多,法属圭亚那,格林纳达,危地马拉,圭亚那,海地,洪都拉斯,牙买加,马提尼克(法),墨西哥,蒙特塞拉特岛,荷属安的列斯群岛,尼加拉瓜,巴拿马,巴拉圭,秘鲁,波多黎哥,圣皮埃尔岛密克隆岛(法),圣克里斯托弗和尼维斯,圣卢西亚,福克兰群岛,维尔京群岛(英),圣文森特岛(英),维尔京群岛(美),苏里南,特立尼达和多巴哥,乌拉圭,美国,委内瑞拉,格陵兰岛,特克斯和凯科斯群岛,瓜多罗普|大洋洲,澳大利亚,科克群岛,斐济,法属波里尼西亚、塔希提,瓦努阿图,关岛,基里巴斯,马里亚纳群岛,中途岛,瑙鲁,新咯里多尼亚群岛,新西兰,巴布亚新几内亚,东萨摩亚,西萨摩亚,所罗门群岛,汤加,对诞岛,威克岛,科科斯岛,夏威夷,诺福克岛,帕劳,纽埃岛,图瓦卢,托克鲁,密克罗尼西亚,马绍尔群岛,瓦里斯加富士那群岛";if(ShowT)PCAD=SPT+"$"+SCT+","+SAT+"#"+PCAD;PCAArea=[];PCAP=[];PCAC=[];PCAA=[];PCAN=PCAD.split("#");for(i=0;i<PCAN.length;i++){PCAA[i]=[];TArea=PCAN[i].split("$")[1].split("|");for(j=0;j<TArea.length;j++){PCAA[i][j]=TArea[j].split(",");if(PCAA[i][j].length==1)PCAA[i][j][1]=SAT;TArea[j]=TArea[j].split(",")[0]}PCAArea[i]=PCAN[i].split("$")[0]+","+TArea.join(",");PCAP[i]=PCAArea[i].split(",")[0];PCAC[i]=PCAArea[i].split(',')}function PCAS(){this.SelP=document.getElementsByName(arguments[0])[0];this.SelC=document.getElementsByName(arguments[1])[0];this.SelA=document.getElementsByName(arguments[2])[0];this.DefP=this.SelA?arguments[3]:arguments[2];this.DefC=this.SelA?arguments[4]:arguments[3];this.DefA=this.SelA?arguments[5]:arguments[4];this.SelP.PCA=this;this.SelC.PCA=this;this.SelP.onchange=function(){PCAS.SetC(this.PCA)};if(this.SelA)this.SelC.onchange=function(){PCAS.SetA(this.PCA)};PCAS.SetP(this)};PCAS.SetP=function(PCA){for(i=0;i<PCAP.length;i++){PCAPT=PCAPV=PCAP[i];if(PCAPT==SPT)PCAPV="";PCA.SelP.options.add(new Option(PCAPT,PCAPV));if(PCA.DefP==PCAPV)PCA.SelP[i].selected=true}PCAS.SetC(PCA)};PCAS.SetC=function(PCA){PI=PCA.SelP.selectedIndex;PCA.SelC.length=0;for(i=1;i<PCAC[PI].length;i++){PCACT=PCACV=PCAC[PI][i];if(PCACT==SCT)PCACV="";PCA.SelC.options.add(new Option(PCACT,PCACV));if(PCA.DefC==PCACV)PCA.SelC[i-1].selected=true}if(PCA.SelA)PCAS.SetA(PCA)};PCAS.SetA=function(PCA){PI=PCA.SelP.selectedIndex;CI=PCA.SelC.selectedIndex;PCA.SelA.length=0;for(i=1;i<PCAA[PI][CI].length;i++){PCAAT=PCAAV=PCAA[PI][CI][i];if(PCAAT==SAT)PCAAV="";PCA.SelA.options.add(new Option(PCAAT,PCAAV));if(PCA.DefA==PCAAV)PCA.SelA[i-1].selected=true}}
//-->