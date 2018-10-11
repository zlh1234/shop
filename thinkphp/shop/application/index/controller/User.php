<?php
namespace app\index\controller;
use think\Request;
use think\Controller;
use think\Db;
use util\Util;
use phpmailer\phpmailer;
class User
{
	//登录
    public function login()
    {
    	$Util = new Util();
    	$reqData = Request::instance()->post();
    	$username = $reqData['username'];
		$password = $Util->customMD5($reqData['password']);
		$result = Db::table('users')
					->field('user_id,user_name,user_nickname,user_mail,user_avatar,user_registered,user_type')
					->where(['user_name'=>$username,'user_password'=>$password])
					->find();
					
		if(empty($result)){
			return json(['code'=>1,'message'=>'用户名或者密码错误']);
		}else{
			return json(['code'=>0,'user'=>$result]);
		}
    }
    
    //检查用户名是否被注册
    public function checkusername()
    {
    	$result = 0;
    	$reqData = Request::instance()->post();
    	if(!empty($reqData)){
    		$username = $reqData['username'];
  		  	$result = Db::table('users')
				->where(['user_name'=>$username])
				->count();
    	}
    	return $result;
    }
    
    //注册
    public function register()
    {
    	$Util = new Util();
    	$reqData = Request::instance()->post();
    	if(!empty($reqData)){
    		$data = [
    			'user_name' => $reqData['username'],
    			'user_nickname' => $reqData['nickname'],
    			'user_mail' => $reqData['mail'],
    			'user_password' => $Util->customMD5($reqData['password']),
    			'user_registered' => time()
    		];
    	
    		$result = Db::table('users')
    					->insert($data);
    		if($result){
    			return json(['code'=>0,'message'=>'注册成功!']);
    		}else{
    			return json(['code'=>1,'message'=>'注册失败,未知错误!']);
    		}
    	}
    }
    
    //发送邮件
    public function sendMaila()
    {
    	$Util = new Util();
    	$reqData = Request::instance()->post();
    	if(!empty($reqData)){
    		$toMail = $reqData['mail'];//目标邮箱
    		$identifyingCode = $Util->randCode();//验证码
    		$res = $this -> sendMailFunc($toMail,$identifyingCode);
    		if($res==1){
    			//code 0 成功
    			return json(['code'=>0,'message'=>'发送成功!','identifyingCode'=>$identifyingCode]);
    		}else{
    			//code 1 失败
    			return json(['code'=>1,'message'=>'发送失败,未知错误!']);
    		}
    	}
    	
//  	$Util = new Util();
//		$toMail = '1032201985@qq.com';//目标邮箱
//		$code = $Util->randCode();//验证码
//		$res = $this -> sendMailFunc($toMail,$code);
//		echo $res;
    	
    }
    
    //发送邮箱验证码  
    public function sendMailFunc($to,$code)
    {  
        // 实例化PHPMailer核心类
		$mail = new PHPMailer();
		// 是否启用smtp的debug进行调试 开发环境建议开启 生产环境注释掉即可 默认关闭debug调试模式
		$mail->SMTPDebug = 1;
		// 使用smtp鉴权方式发送邮件
		$mail->isSMTP();
		// smtp需要鉴权 这个必须是true
		$mail->SMTPAuth = true;
		// 服务器地址
		$mail->Host = 'smtp.163.com';
		// 设置使用ssl加密方式登录鉴权
		$mail->SMTPSecure = 'ssl';
		// 设置ssl连接smtp服务器的远程服务器端口号
		$mail->Port = 465;
		// 设置发送的邮件的编码
		$mail->CharSet = 'UTF-8';
		// 设置发件人昵称 显示在收件人邮件的发件人邮箱地址前的发件人姓名
		$mail->FromName = '天天商城';
		// smtp登录的账号
		$mail->Username = 'zlinhui6@163.com';
		// smtp登录的密码 使用生成的授权码
		$mail->Password = 'm15605945737';
		// 设置发件人邮箱地址
		$mail->From = 'zlinhui6@163.com';
		// 邮件正文是否为html编码 注意此处是一个方法
		$mail->isHTML(true);
		// 设置收件人邮箱地址
		$mail->addAddress($to);
		// 添加多个收件人 则多次调用方法即可
//		$mail->addAddress('87654321@163.com');
		// 添加该邮件的主题
		$mail->Subject = '天天商城邮箱验证码';
		// 添加邮件正文
		$mail->Body = '您的验证码为：<h1>'.$code.'</h1>';
		// 为该邮件添加附件
//		$mail->addAttachment('./example.pdf');
		// 发送邮件 返回状态
		$status = $mail->send();
		return $status;
    } 
}