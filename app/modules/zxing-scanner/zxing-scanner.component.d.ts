import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Result, DecodeHintType, BarcodeFormat } from '@zxing/library';
export declare class ZXingScannerComponent implements AfterViewInit, OnDestroy, OnChanges {
    /**
     * Supported Hints map.
     */
    private _hints;
    /**
     * The ZXing code reader.
     */
    private codeReader;
    /**
     * Has `navigator` access.
     */
    private hasNavigator;
    /**
     * Says if some native API is supported.
     */
    private isMediaDevicesSuported;
    /**
     * Says if some native API is supported.
     */
    private isEnumerateDevicesSuported;
    /**
     * List of enable video-input devices.
     */
    private videoInputDevices;
    /**
     * The current device used to scan things.
     */
    private videoInputDevice;
    /**
     * If the user-agent allowed the use of the camera or not.
     */
    private hasPermission;
    /**
     * If any media device were found.
     */
    private _hasDevices;
    /**
     * Reference to the preview element, should be the `video` tag.
     */
    previewElemRef: ElementRef;
    /**
     * Allow start scan or not.
     */
    scannerEnabled: boolean;
    /**
     * The device that should be used to scan things.
     */
    device: MediaDeviceInfo;
    /**
     * Enable or disable autofocus of the camera (might have an impact on performance)
     */
    autofocusEnabled: boolean;
    /**
     * How the preview element shoud be fit inside the :host container.
     */
    previewFitMode: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
    /**
     * Emitts events when the torch compatibility is changed.
     */
    torchCompatible: EventEmitter<boolean>;
    /**
     * Emitts events when a scan is successful performed, will inject the string value of the QR-code to the callback.
     */
    scanSuccess: EventEmitter<string>;
    /**
     * Emitts events when a scan fails without errors, usefull to know how much scan tries where made.
     */
    scanFailure: EventEmitter<void>;
    /**
     * Emitts events when a scan throws some error, will inject the error to the callback.
     */
    scanError: EventEmitter<Error>;
    /**
     * Emitts events when a scan is performed, will inject the Result value of the QR-code scan (if available) to the callback.
     */
    scanComplete: EventEmitter<Result>;
    /**
     * Emitts events when no cameras are found, will inject an exception (if available) to the callback.
     */
    camerasFound: EventEmitter<MediaDeviceInfo[]>;
    /**
     * Emitts events when no cameras are found, will inject an exception (if available) to the callback.
     */
    camerasNotFound: EventEmitter<any>;
    /**
     * Emitts events when the users answers for permission.
     */
    permissionResponse: EventEmitter<boolean>;
    /**
     * Emitts events when has devices status is update.
     */
    hasDevices: EventEmitter<boolean>;
    /**
     * Returns all the registered formats.
     */
    /**
    * Registers formats the scanner should support.
    *
    * @param input BarcodeFormat or case-insensitive string array.
    */
    formats: BarcodeFormat[];
    /**
     * Returns all the registered hints.
     */
    readonly hints: Map<DecodeHintType, any>;
    /**
     * Allow start scan or not.
     */
    torch: boolean;
    /**
     * If is `tryHarder` enabled.
     */
    /**
    * Enable/disable tryHarder hint.
    */
    tryHarder: boolean;
    /**
     * Constructor to build the object and do some DI.
     */
    constructor();
    /**
     * Manages the bindinded property changes.
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Executed after the view initialization.
     */
    ngAfterViewInit(): Promise<void>;
    /**
     * Executes some actions before destroy the component.
     */
    ngOnDestroy(): void;
    /**
     * Properly changes the current target device.
     *
     * @param device
     */
    changeDevice(device: MediaDeviceInfo): void;
    /**
     * Properly changes the current target device using it's deviceId.
     *
     * @param deviceId
     */
    changeDeviceById(deviceId: string): void;
    /**
     * Properly returns the target device using it's deviceId.
     *
     * @param deviceId
     */
    getDeviceById(deviceId: string): MediaDeviceInfo;
    /**
     * Sets the permission value and emmits the event.
     */
    private setPermission;
    /**
     * Gets and registers all cammeras.
     *
     * @todo Return a Promise.
     */
    askForPermission(): Promise<boolean>;
    /**
     * Returns the filtered permission.
     *
     * @param err
     */
    private handlePermissionException;
    /**
     * Starts the continuous scanning for the given device.
     *
     * @param deviceId The deviceId from the device.
     */
    scan(deviceId: string): void;
    /**
     * Starts scanning if allowed.
     *
     * @param device The device to be used in the scan.
     */
    startScan(device: MediaDeviceInfo): void;
    /**
     * Stops the scan service.
     */
    resetCodeReader(): void;
    /**
     * Stops and starts back the scan.
     */
    restartScan(): void;
    /**
     * Stops old `codeReader` and starts scanning in a new one.
     */
    refreshCodeReader(): void;
    /**
     * Dispatches the scan success event.
     *
     * @param result the scan result.
     */
    private dispatchScanSuccess;
    /**
     * Dispatches the scan failure event.
     */
    private dispatchScanFailure;
    /**
     * Dispatches the scan error event.
     *
     * @param err the error thing.
     */
    private dispatchScanError;
    /**
     * Dispatches the scan event.
     *
     * @param result the scan result.
     */
    private dispatchScanComplete;
    /**
     * Enumerates all the available devices.
     */
    private enumarateVideoDevices;
    /**
     * Returns a valid BarcodeFormat or fails.
     */
    private getBarcodeFormat;
}
