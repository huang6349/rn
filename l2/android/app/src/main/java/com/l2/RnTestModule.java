package com.l2;

import android.app.ProgressDialog;
import android.os.Handler;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by 黄亚龙 on 2017/3/22.
 */

public class RnTestModule extends ReactContextBaseJavaModule {

    public RnTestModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * 我们必须实现这个方法，这个方法是用于在js端来根据返回的名字来进行调用
     * <p>
     * eg. NativeModules.RnTestModule
     * "RnTestModule"就是我们在rn那边调用的名字,我们也只能这样调用原生的方法
     */
    @Override
    public String getName() {
        return "RnTestModule";
    }

    /**
     * 这个就是我们自定义的封装方法，用来弹出一段消息，"show"就是调用的名称
     * <p>
     * eg. NativeModules.RnTestModule.show(message);
     */
    @ReactMethod
    public void show(String message) {
        Toast.makeText(this.getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }

    /**
     * 这个就是我们自定义的封装方法，用来模拟请求数据，"getResult"就是调用的名称
     * <p>
     * eg.NativeModules.RnTestModule.getResult(url, callback)
     */
    @ReactMethod
    public void getResult(String url, final Callback callback) {
        final ProgressDialog progressDialog = new ProgressDialog(this.getCurrentActivity());
        progressDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
        progressDialog.setMessage("正在模拟向" + url + "去请求数据啦~");
        progressDialog.setCanceledOnTouchOutside(false);
        progressDialog.show();
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                progressDialog.cancel();
                Toast.makeText(getReactApplicationContext(), "请求数据成功拉~", Toast.LENGTH_SHORT).show();
                callback.invoke("ok啦~");
            }
        }, 1500);
    }
}
