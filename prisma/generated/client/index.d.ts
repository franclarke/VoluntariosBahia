
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TipoArticulo
 * 
 */
export type TipoArticulo = $Result.DefaultSelection<Prisma.$TipoArticuloPayload>
/**
 * Model CentroDistribucion
 * 
 */
export type CentroDistribucion = $Result.DefaultSelection<Prisma.$CentroDistribucionPayload>
/**
 * Model ArticuloOferta
 * 
 */
export type ArticuloOferta = $Result.DefaultSelection<Prisma.$ArticuloOfertaPayload>
/**
 * Model Solicitud
 * 
 */
export type Solicitud = $Result.DefaultSelection<Prisma.$SolicitudPayload>
/**
 * Model ArticuloSolicitud
 * 
 */
export type ArticuloSolicitud = $Result.DefaultSelection<Prisma.$ArticuloSolicitudPayload>
/**
 * Model PeticionDonacion
 * 
 */
export type PeticionDonacion = $Result.DefaultSelection<Prisma.$PeticionDonacionPayload>
/**
 * Model ArticuloPeticion
 * 
 */
export type ArticuloPeticion = $Result.DefaultSelection<Prisma.$ArticuloPeticionPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model SolicitudCentro
 * 
 */
export type SolicitudCentro = $Result.DefaultSelection<Prisma.$SolicitudCentroPayload>
/**
 * Model ArticuloSolicitado
 * 
 */
export type ArticuloSolicitado = $Result.DefaultSelection<Prisma.$ArticuloSolicitadoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TipoArticulos
 * const tipoArticulos = await prisma.tipoArticulo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TipoArticulos
   * const tipoArticulos = await prisma.tipoArticulo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tipoArticulo`: Exposes CRUD operations for the **TipoArticulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoArticulos
    * const tipoArticulos = await prisma.tipoArticulo.findMany()
    * ```
    */
  get tipoArticulo(): Prisma.TipoArticuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centroDistribucion`: Exposes CRUD operations for the **CentroDistribucion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CentroDistribucions
    * const centroDistribucions = await prisma.centroDistribucion.findMany()
    * ```
    */
  get centroDistribucion(): Prisma.CentroDistribucionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articuloOferta`: Exposes CRUD operations for the **ArticuloOferta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticuloOfertas
    * const articuloOfertas = await prisma.articuloOferta.findMany()
    * ```
    */
  get articuloOferta(): Prisma.ArticuloOfertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitud`: Exposes CRUD operations for the **Solicitud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicituds
    * const solicituds = await prisma.solicitud.findMany()
    * ```
    */
  get solicitud(): Prisma.SolicitudDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articuloSolicitud`: Exposes CRUD operations for the **ArticuloSolicitud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticuloSolicituds
    * const articuloSolicituds = await prisma.articuloSolicitud.findMany()
    * ```
    */
  get articuloSolicitud(): Prisma.ArticuloSolicitudDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peticionDonacion`: Exposes CRUD operations for the **PeticionDonacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeticionDonacions
    * const peticionDonacions = await prisma.peticionDonacion.findMany()
    * ```
    */
  get peticionDonacion(): Prisma.PeticionDonacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articuloPeticion`: Exposes CRUD operations for the **ArticuloPeticion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticuloPeticions
    * const articuloPeticions = await prisma.articuloPeticion.findMany()
    * ```
    */
  get articuloPeticion(): Prisma.ArticuloPeticionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitudCentro`: Exposes CRUD operations for the **SolicitudCentro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolicitudCentros
    * const solicitudCentros = await prisma.solicitudCentro.findMany()
    * ```
    */
  get solicitudCentro(): Prisma.SolicitudCentroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articuloSolicitado`: Exposes CRUD operations for the **ArticuloSolicitado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticuloSolicitados
    * const articuloSolicitados = await prisma.articuloSolicitado.findMany()
    * ```
    */
  get articuloSolicitado(): Prisma.ArticuloSolicitadoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TipoArticulo: 'TipoArticulo',
    CentroDistribucion: 'CentroDistribucion',
    ArticuloOferta: 'ArticuloOferta',
    Solicitud: 'Solicitud',
    ArticuloSolicitud: 'ArticuloSolicitud',
    PeticionDonacion: 'PeticionDonacion',
    ArticuloPeticion: 'ArticuloPeticion',
    Administrador: 'Administrador',
    SolicitudCentro: 'SolicitudCentro',
    ArticuloSolicitado: 'ArticuloSolicitado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tipoArticulo" | "centroDistribucion" | "articuloOferta" | "solicitud" | "articuloSolicitud" | "peticionDonacion" | "articuloPeticion" | "administrador" | "solicitudCentro" | "articuloSolicitado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipoArticulo: {
        payload: Prisma.$TipoArticuloPayload<ExtArgs>
        fields: Prisma.TipoArticuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoArticuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoArticuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          findFirst: {
            args: Prisma.TipoArticuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoArticuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          findMany: {
            args: Prisma.TipoArticuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>[]
          }
          create: {
            args: Prisma.TipoArticuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          createMany: {
            args: Prisma.TipoArticuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoArticuloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>[]
          }
          delete: {
            args: Prisma.TipoArticuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          update: {
            args: Prisma.TipoArticuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          deleteMany: {
            args: Prisma.TipoArticuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoArticuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoArticuloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>[]
          }
          upsert: {
            args: Prisma.TipoArticuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoArticuloPayload>
          }
          aggregate: {
            args: Prisma.TipoArticuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoArticulo>
          }
          groupBy: {
            args: Prisma.TipoArticuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoArticuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoArticuloCountArgs<ExtArgs>
            result: $Utils.Optional<TipoArticuloCountAggregateOutputType> | number
          }
        }
      }
      CentroDistribucion: {
        payload: Prisma.$CentroDistribucionPayload<ExtArgs>
        fields: Prisma.CentroDistribucionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CentroDistribucionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CentroDistribucionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>
          }
          findFirst: {
            args: Prisma.CentroDistribucionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CentroDistribucionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>
          }
          findMany: {
            args: Prisma.CentroDistribucionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>[]
          }
          create: {
            args: Prisma.CentroDistribucionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>
          }
          createMany: {
            args: Prisma.CentroDistribucionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CentroDistribucionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>[]
          }
          delete: {
            args: Prisma.CentroDistribucionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>
          }
          update: {
            args: Prisma.CentroDistribucionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>
          }
          deleteMany: {
            args: Prisma.CentroDistribucionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CentroDistribucionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CentroDistribucionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>[]
          }
          upsert: {
            args: Prisma.CentroDistribucionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroDistribucionPayload>
          }
          aggregate: {
            args: Prisma.CentroDistribucionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentroDistribucion>
          }
          groupBy: {
            args: Prisma.CentroDistribucionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CentroDistribucionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CentroDistribucionCountArgs<ExtArgs>
            result: $Utils.Optional<CentroDistribucionCountAggregateOutputType> | number
          }
        }
      }
      ArticuloOferta: {
        payload: Prisma.$ArticuloOfertaPayload<ExtArgs>
        fields: Prisma.ArticuloOfertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloOfertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloOfertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          findFirst: {
            args: Prisma.ArticuloOfertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloOfertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          findMany: {
            args: Prisma.ArticuloOfertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>[]
          }
          create: {
            args: Prisma.ArticuloOfertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          createMany: {
            args: Prisma.ArticuloOfertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloOfertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>[]
          }
          delete: {
            args: Prisma.ArticuloOfertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          update: {
            args: Prisma.ArticuloOfertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloOfertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloOfertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloOfertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloOfertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloOfertaPayload>
          }
          aggregate: {
            args: Prisma.ArticuloOfertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticuloOferta>
          }
          groupBy: {
            args: Prisma.ArticuloOfertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloOfertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloOfertaCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloOfertaCountAggregateOutputType> | number
          }
        }
      }
      Solicitud: {
        payload: Prisma.$SolicitudPayload<ExtArgs>
        fields: Prisma.SolicitudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findFirst: {
            args: Prisma.SolicitudFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findMany: {
            args: Prisma.SolicitudFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          create: {
            args: Prisma.SolicitudCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          createMany: {
            args: Prisma.SolicitudCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          delete: {
            args: Prisma.SolicitudDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          update: {
            args: Prisma.SolicitudUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          aggregate: {
            args: Prisma.SolicitudAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitud>
          }
          groupBy: {
            args: Prisma.SolicitudGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudCountAggregateOutputType> | number
          }
        }
      }
      ArticuloSolicitud: {
        payload: Prisma.$ArticuloSolicitudPayload<ExtArgs>
        fields: Prisma.ArticuloSolicitudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloSolicitudFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloSolicitudFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          findFirst: {
            args: Prisma.ArticuloSolicitudFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloSolicitudFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          findMany: {
            args: Prisma.ArticuloSolicitudFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>[]
          }
          create: {
            args: Prisma.ArticuloSolicitudCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          createMany: {
            args: Prisma.ArticuloSolicitudCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloSolicitudCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>[]
          }
          delete: {
            args: Prisma.ArticuloSolicitudDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          update: {
            args: Prisma.ArticuloSolicitudUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloSolicitudDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloSolicitudUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloSolicitudUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloSolicitudUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitudPayload>
          }
          aggregate: {
            args: Prisma.ArticuloSolicitudAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticuloSolicitud>
          }
          groupBy: {
            args: Prisma.ArticuloSolicitudGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloSolicitudGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloSolicitudCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloSolicitudCountAggregateOutputType> | number
          }
        }
      }
      PeticionDonacion: {
        payload: Prisma.$PeticionDonacionPayload<ExtArgs>
        fields: Prisma.PeticionDonacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeticionDonacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeticionDonacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          findFirst: {
            args: Prisma.PeticionDonacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeticionDonacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          findMany: {
            args: Prisma.PeticionDonacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>[]
          }
          create: {
            args: Prisma.PeticionDonacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          createMany: {
            args: Prisma.PeticionDonacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeticionDonacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>[]
          }
          delete: {
            args: Prisma.PeticionDonacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          update: {
            args: Prisma.PeticionDonacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          deleteMany: {
            args: Prisma.PeticionDonacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeticionDonacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeticionDonacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>[]
          }
          upsert: {
            args: Prisma.PeticionDonacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeticionDonacionPayload>
          }
          aggregate: {
            args: Prisma.PeticionDonacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeticionDonacion>
          }
          groupBy: {
            args: Prisma.PeticionDonacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeticionDonacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeticionDonacionCountArgs<ExtArgs>
            result: $Utils.Optional<PeticionDonacionCountAggregateOutputType> | number
          }
        }
      }
      ArticuloPeticion: {
        payload: Prisma.$ArticuloPeticionPayload<ExtArgs>
        fields: Prisma.ArticuloPeticionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloPeticionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloPeticionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          findFirst: {
            args: Prisma.ArticuloPeticionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloPeticionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          findMany: {
            args: Prisma.ArticuloPeticionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>[]
          }
          create: {
            args: Prisma.ArticuloPeticionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          createMany: {
            args: Prisma.ArticuloPeticionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloPeticionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>[]
          }
          delete: {
            args: Prisma.ArticuloPeticionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          update: {
            args: Prisma.ArticuloPeticionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloPeticionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloPeticionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloPeticionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloPeticionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloPeticionPayload>
          }
          aggregate: {
            args: Prisma.ArticuloPeticionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticuloPeticion>
          }
          groupBy: {
            args: Prisma.ArticuloPeticionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloPeticionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloPeticionCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloPeticionCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      SolicitudCentro: {
        payload: Prisma.$SolicitudCentroPayload<ExtArgs>
        fields: Prisma.SolicitudCentroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudCentroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudCentroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>
          }
          findFirst: {
            args: Prisma.SolicitudCentroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudCentroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>
          }
          findMany: {
            args: Prisma.SolicitudCentroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>[]
          }
          create: {
            args: Prisma.SolicitudCentroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>
          }
          createMany: {
            args: Prisma.SolicitudCentroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudCentroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>[]
          }
          delete: {
            args: Prisma.SolicitudCentroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>
          }
          update: {
            args: Prisma.SolicitudCentroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudCentroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudCentroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudCentroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudCentroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudCentroPayload>
          }
          aggregate: {
            args: Prisma.SolicitudCentroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitudCentro>
          }
          groupBy: {
            args: Prisma.SolicitudCentroGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudCentroGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudCentroCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudCentroCountAggregateOutputType> | number
          }
        }
      }
      ArticuloSolicitado: {
        payload: Prisma.$ArticuloSolicitadoPayload<ExtArgs>
        fields: Prisma.ArticuloSolicitadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticuloSolicitadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticuloSolicitadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>
          }
          findFirst: {
            args: Prisma.ArticuloSolicitadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticuloSolicitadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>
          }
          findMany: {
            args: Prisma.ArticuloSolicitadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>[]
          }
          create: {
            args: Prisma.ArticuloSolicitadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>
          }
          createMany: {
            args: Prisma.ArticuloSolicitadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticuloSolicitadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>[]
          }
          delete: {
            args: Prisma.ArticuloSolicitadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>
          }
          update: {
            args: Prisma.ArticuloSolicitadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>
          }
          deleteMany: {
            args: Prisma.ArticuloSolicitadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticuloSolicitadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticuloSolicitadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>[]
          }
          upsert: {
            args: Prisma.ArticuloSolicitadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticuloSolicitadoPayload>
          }
          aggregate: {
            args: Prisma.ArticuloSolicitadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticuloSolicitado>
          }
          groupBy: {
            args: Prisma.ArticuloSolicitadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloSolicitadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticuloSolicitadoCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloSolicitadoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tipoArticulo?: TipoArticuloOmit
    centroDistribucion?: CentroDistribucionOmit
    articuloOferta?: ArticuloOfertaOmit
    solicitud?: SolicitudOmit
    articuloSolicitud?: ArticuloSolicitudOmit
    peticionDonacion?: PeticionDonacionOmit
    articuloPeticion?: ArticuloPeticionOmit
    administrador?: AdministradorOmit
    solicitudCentro?: SolicitudCentroOmit
    articuloSolicitado?: ArticuloSolicitadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TipoArticuloCountOutputType
   */

  export type TipoArticuloCountOutputType = {
    articulosOferta: number
    articulosPeticion: number
    articulosSolicitud: number
    articulosSolicitados: number
  }

  export type TipoArticuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulosOferta?: boolean | TipoArticuloCountOutputTypeCountArticulosOfertaArgs
    articulosPeticion?: boolean | TipoArticuloCountOutputTypeCountArticulosPeticionArgs
    articulosSolicitud?: boolean | TipoArticuloCountOutputTypeCountArticulosSolicitudArgs
    articulosSolicitados?: boolean | TipoArticuloCountOutputTypeCountArticulosSolicitadosArgs
  }

  // Custom InputTypes
  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticuloCountOutputType
     */
    select?: TipoArticuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeCountArticulosOfertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloOfertaWhereInput
  }

  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeCountArticulosPeticionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloPeticionWhereInput
  }

  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeCountArticulosSolicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitudWhereInput
  }

  /**
   * TipoArticuloCountOutputType without action
   */
  export type TipoArticuloCountOutputTypeCountArticulosSolicitadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitadoWhereInput
  }


  /**
   * Count Type CentroDistribucionCountOutputType
   */

  export type CentroDistribucionCountOutputType = {
    articulos: number
  }

  export type CentroDistribucionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | CentroDistribucionCountOutputTypeCountArticulosArgs
  }

  // Custom InputTypes
  /**
   * CentroDistribucionCountOutputType without action
   */
  export type CentroDistribucionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucionCountOutputType
     */
    select?: CentroDistribucionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CentroDistribucionCountOutputType without action
   */
  export type CentroDistribucionCountOutputTypeCountArticulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloOfertaWhereInput
  }


  /**
   * Count Type SolicitudCountOutputType
   */

  export type SolicitudCountOutputType = {
    articulos: number
  }

  export type SolicitudCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | SolicitudCountOutputTypeCountArticulosArgs
  }

  // Custom InputTypes
  /**
   * SolicitudCountOutputType without action
   */
  export type SolicitudCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCountOutputType
     */
    select?: SolicitudCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SolicitudCountOutputType without action
   */
  export type SolicitudCountOutputTypeCountArticulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitudWhereInput
  }


  /**
   * Count Type PeticionDonacionCountOutputType
   */

  export type PeticionDonacionCountOutputType = {
    articulos: number
  }

  export type PeticionDonacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | PeticionDonacionCountOutputTypeCountArticulosArgs
  }

  // Custom InputTypes
  /**
   * PeticionDonacionCountOutputType without action
   */
  export type PeticionDonacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacionCountOutputType
     */
    select?: PeticionDonacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeticionDonacionCountOutputType without action
   */
  export type PeticionDonacionCountOutputTypeCountArticulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloPeticionWhereInput
  }


  /**
   * Count Type SolicitudCentroCountOutputType
   */

  export type SolicitudCentroCountOutputType = {
    articulosSolicitados: number
  }

  export type SolicitudCentroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulosSolicitados?: boolean | SolicitudCentroCountOutputTypeCountArticulosSolicitadosArgs
  }

  // Custom InputTypes
  /**
   * SolicitudCentroCountOutputType without action
   */
  export type SolicitudCentroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentroCountOutputType
     */
    select?: SolicitudCentroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SolicitudCentroCountOutputType without action
   */
  export type SolicitudCentroCountOutputTypeCountArticulosSolicitadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitadoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipoArticulo
   */

  export type AggregateTipoArticulo = {
    _count: TipoArticuloCountAggregateOutputType | null
    _avg: TipoArticuloAvgAggregateOutputType | null
    _sum: TipoArticuloSumAggregateOutputType | null
    _min: TipoArticuloMinAggregateOutputType | null
    _max: TipoArticuloMaxAggregateOutputType | null
  }

  export type TipoArticuloAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoArticuloSumAggregateOutputType = {
    id: number | null
  }

  export type TipoArticuloMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type TipoArticuloMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type TipoArticuloCountAggregateOutputType = {
    id: number
    nombre: number
    creadoEn: number
    _all: number
  }


  export type TipoArticuloAvgAggregateInputType = {
    id?: true
  }

  export type TipoArticuloSumAggregateInputType = {
    id?: true
  }

  export type TipoArticuloMinAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type TipoArticuloMaxAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type TipoArticuloCountAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
    _all?: true
  }

  export type TipoArticuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoArticulo to aggregate.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoArticulos
    **/
    _count?: true | TipoArticuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoArticuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoArticuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoArticuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoArticuloMaxAggregateInputType
  }

  export type GetTipoArticuloAggregateType<T extends TipoArticuloAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoArticulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoArticulo[P]>
      : GetScalarType<T[P], AggregateTipoArticulo[P]>
  }




  export type TipoArticuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoArticuloWhereInput
    orderBy?: TipoArticuloOrderByWithAggregationInput | TipoArticuloOrderByWithAggregationInput[]
    by: TipoArticuloScalarFieldEnum[] | TipoArticuloScalarFieldEnum
    having?: TipoArticuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoArticuloCountAggregateInputType | true
    _avg?: TipoArticuloAvgAggregateInputType
    _sum?: TipoArticuloSumAggregateInputType
    _min?: TipoArticuloMinAggregateInputType
    _max?: TipoArticuloMaxAggregateInputType
  }

  export type TipoArticuloGroupByOutputType = {
    id: number
    nombre: string
    creadoEn: Date
    _count: TipoArticuloCountAggregateOutputType | null
    _avg: TipoArticuloAvgAggregateOutputType | null
    _sum: TipoArticuloSumAggregateOutputType | null
    _min: TipoArticuloMinAggregateOutputType | null
    _max: TipoArticuloMaxAggregateOutputType | null
  }

  type GetTipoArticuloGroupByPayload<T extends TipoArticuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoArticuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoArticuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoArticuloGroupByOutputType[P]>
            : GetScalarType<T[P], TipoArticuloGroupByOutputType[P]>
        }
      >
    >


  export type TipoArticuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
    articulosOferta?: boolean | TipoArticulo$articulosOfertaArgs<ExtArgs>
    articulosPeticion?: boolean | TipoArticulo$articulosPeticionArgs<ExtArgs>
    articulosSolicitud?: boolean | TipoArticulo$articulosSolicitudArgs<ExtArgs>
    articulosSolicitados?: boolean | TipoArticulo$articulosSolicitadosArgs<ExtArgs>
    _count?: boolean | TipoArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoArticulo"]>

  export type TipoArticuloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["tipoArticulo"]>

  export type TipoArticuloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["tipoArticulo"]>

  export type TipoArticuloSelectScalar = {
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }

  export type TipoArticuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "creadoEn", ExtArgs["result"]["tipoArticulo"]>
  export type TipoArticuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulosOferta?: boolean | TipoArticulo$articulosOfertaArgs<ExtArgs>
    articulosPeticion?: boolean | TipoArticulo$articulosPeticionArgs<ExtArgs>
    articulosSolicitud?: boolean | TipoArticulo$articulosSolicitudArgs<ExtArgs>
    articulosSolicitados?: boolean | TipoArticulo$articulosSolicitadosArgs<ExtArgs>
    _count?: boolean | TipoArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoArticuloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoArticuloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoArticuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoArticulo"
    objects: {
      articulosOferta: Prisma.$ArticuloOfertaPayload<ExtArgs>[]
      articulosPeticion: Prisma.$ArticuloPeticionPayload<ExtArgs>[]
      articulosSolicitud: Prisma.$ArticuloSolicitudPayload<ExtArgs>[]
      articulosSolicitados: Prisma.$ArticuloSolicitadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      creadoEn: Date
    }, ExtArgs["result"]["tipoArticulo"]>
    composites: {}
  }

  type TipoArticuloGetPayload<S extends boolean | null | undefined | TipoArticuloDefaultArgs> = $Result.GetResult<Prisma.$TipoArticuloPayload, S>

  type TipoArticuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoArticuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoArticuloCountAggregateInputType | true
    }

  export interface TipoArticuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoArticulo'], meta: { name: 'TipoArticulo' } }
    /**
     * Find zero or one TipoArticulo that matches the filter.
     * @param {TipoArticuloFindUniqueArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoArticuloFindUniqueArgs>(args: SelectSubset<T, TipoArticuloFindUniqueArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoArticulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoArticuloFindUniqueOrThrowArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoArticuloFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoArticuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoArticulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloFindFirstArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoArticuloFindFirstArgs>(args?: SelectSubset<T, TipoArticuloFindFirstArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoArticulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloFindFirstOrThrowArgs} args - Arguments to find a TipoArticulo
     * @example
     * // Get one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoArticuloFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoArticuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoArticulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoArticulos
     * const tipoArticulos = await prisma.tipoArticulo.findMany()
     * 
     * // Get first 10 TipoArticulos
     * const tipoArticulos = await prisma.tipoArticulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoArticuloWithIdOnly = await prisma.tipoArticulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoArticuloFindManyArgs>(args?: SelectSubset<T, TipoArticuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoArticulo.
     * @param {TipoArticuloCreateArgs} args - Arguments to create a TipoArticulo.
     * @example
     * // Create one TipoArticulo
     * const TipoArticulo = await prisma.tipoArticulo.create({
     *   data: {
     *     // ... data to create a TipoArticulo
     *   }
     * })
     * 
     */
    create<T extends TipoArticuloCreateArgs>(args: SelectSubset<T, TipoArticuloCreateArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoArticulos.
     * @param {TipoArticuloCreateManyArgs} args - Arguments to create many TipoArticulos.
     * @example
     * // Create many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoArticuloCreateManyArgs>(args?: SelectSubset<T, TipoArticuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoArticulos and returns the data saved in the database.
     * @param {TipoArticuloCreateManyAndReturnArgs} args - Arguments to create many TipoArticulos.
     * @example
     * // Create many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoArticulos and only return the `id`
     * const tipoArticuloWithIdOnly = await prisma.tipoArticulo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoArticuloCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoArticuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoArticulo.
     * @param {TipoArticuloDeleteArgs} args - Arguments to delete one TipoArticulo.
     * @example
     * // Delete one TipoArticulo
     * const TipoArticulo = await prisma.tipoArticulo.delete({
     *   where: {
     *     // ... filter to delete one TipoArticulo
     *   }
     * })
     * 
     */
    delete<T extends TipoArticuloDeleteArgs>(args: SelectSubset<T, TipoArticuloDeleteArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoArticulo.
     * @param {TipoArticuloUpdateArgs} args - Arguments to update one TipoArticulo.
     * @example
     * // Update one TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoArticuloUpdateArgs>(args: SelectSubset<T, TipoArticuloUpdateArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoArticulos.
     * @param {TipoArticuloDeleteManyArgs} args - Arguments to filter TipoArticulos to delete.
     * @example
     * // Delete a few TipoArticulos
     * const { count } = await prisma.tipoArticulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoArticuloDeleteManyArgs>(args?: SelectSubset<T, TipoArticuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoArticulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoArticuloUpdateManyArgs>(args: SelectSubset<T, TipoArticuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoArticulos and returns the data updated in the database.
     * @param {TipoArticuloUpdateManyAndReturnArgs} args - Arguments to update many TipoArticulos.
     * @example
     * // Update many TipoArticulos
     * const tipoArticulo = await prisma.tipoArticulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoArticulos and only return the `id`
     * const tipoArticuloWithIdOnly = await prisma.tipoArticulo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoArticuloUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoArticuloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoArticulo.
     * @param {TipoArticuloUpsertArgs} args - Arguments to update or create a TipoArticulo.
     * @example
     * // Update or create a TipoArticulo
     * const tipoArticulo = await prisma.tipoArticulo.upsert({
     *   create: {
     *     // ... data to create a TipoArticulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoArticulo we want to update
     *   }
     * })
     */
    upsert<T extends TipoArticuloUpsertArgs>(args: SelectSubset<T, TipoArticuloUpsertArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoArticulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloCountArgs} args - Arguments to filter TipoArticulos to count.
     * @example
     * // Count the number of TipoArticulos
     * const count = await prisma.tipoArticulo.count({
     *   where: {
     *     // ... the filter for the TipoArticulos we want to count
     *   }
     * })
    **/
    count<T extends TipoArticuloCountArgs>(
      args?: Subset<T, TipoArticuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoArticuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoArticulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoArticuloAggregateArgs>(args: Subset<T, TipoArticuloAggregateArgs>): Prisma.PrismaPromise<GetTipoArticuloAggregateType<T>>

    /**
     * Group by TipoArticulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoArticuloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoArticuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoArticuloGroupByArgs['orderBy'] }
        : { orderBy?: TipoArticuloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoArticuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoArticuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoArticulo model
   */
  readonly fields: TipoArticuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoArticulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoArticuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulosOferta<T extends TipoArticulo$articulosOfertaArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticulo$articulosOfertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articulosPeticion<T extends TipoArticulo$articulosPeticionArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticulo$articulosPeticionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articulosSolicitud<T extends TipoArticulo$articulosSolicitudArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticulo$articulosSolicitudArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articulosSolicitados<T extends TipoArticulo$articulosSolicitadosArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticulo$articulosSolicitadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoArticulo model
   */ 
  interface TipoArticuloFieldRefs {
    readonly id: FieldRef<"TipoArticulo", 'Int'>
    readonly nombre: FieldRef<"TipoArticulo", 'String'>
    readonly creadoEn: FieldRef<"TipoArticulo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoArticulo findUnique
   */
  export type TipoArticuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo findUniqueOrThrow
   */
  export type TipoArticuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo findFirst
   */
  export type TipoArticuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoArticulos.
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoArticulos.
     */
    distinct?: TipoArticuloScalarFieldEnum | TipoArticuloScalarFieldEnum[]
  }

  /**
   * TipoArticulo findFirstOrThrow
   */
  export type TipoArticuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulo to fetch.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoArticulos.
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoArticulos.
     */
    distinct?: TipoArticuloScalarFieldEnum | TipoArticuloScalarFieldEnum[]
  }

  /**
   * TipoArticulo findMany
   */
  export type TipoArticuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter, which TipoArticulos to fetch.
     */
    where?: TipoArticuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoArticulos to fetch.
     */
    orderBy?: TipoArticuloOrderByWithRelationInput | TipoArticuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoArticulos.
     */
    cursor?: TipoArticuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoArticulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoArticulos.
     */
    skip?: number
    distinct?: TipoArticuloScalarFieldEnum | TipoArticuloScalarFieldEnum[]
  }

  /**
   * TipoArticulo create
   */
  export type TipoArticuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoArticulo.
     */
    data: XOR<TipoArticuloCreateInput, TipoArticuloUncheckedCreateInput>
  }

  /**
   * TipoArticulo createMany
   */
  export type TipoArticuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoArticulos.
     */
    data: TipoArticuloCreateManyInput | TipoArticuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoArticulo createManyAndReturn
   */
  export type TipoArticuloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * The data used to create many TipoArticulos.
     */
    data: TipoArticuloCreateManyInput | TipoArticuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoArticulo update
   */
  export type TipoArticuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoArticulo.
     */
    data: XOR<TipoArticuloUpdateInput, TipoArticuloUncheckedUpdateInput>
    /**
     * Choose, which TipoArticulo to update.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo updateMany
   */
  export type TipoArticuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoArticulos.
     */
    data: XOR<TipoArticuloUpdateManyMutationInput, TipoArticuloUncheckedUpdateManyInput>
    /**
     * Filter which TipoArticulos to update
     */
    where?: TipoArticuloWhereInput
    /**
     * Limit how many TipoArticulos to update.
     */
    limit?: number
  }

  /**
   * TipoArticulo updateManyAndReturn
   */
  export type TipoArticuloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * The data used to update TipoArticulos.
     */
    data: XOR<TipoArticuloUpdateManyMutationInput, TipoArticuloUncheckedUpdateManyInput>
    /**
     * Filter which TipoArticulos to update
     */
    where?: TipoArticuloWhereInput
    /**
     * Limit how many TipoArticulos to update.
     */
    limit?: number
  }

  /**
   * TipoArticulo upsert
   */
  export type TipoArticuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoArticulo to update in case it exists.
     */
    where: TipoArticuloWhereUniqueInput
    /**
     * In case the TipoArticulo found by the `where` argument doesn't exist, create a new TipoArticulo with this data.
     */
    create: XOR<TipoArticuloCreateInput, TipoArticuloUncheckedCreateInput>
    /**
     * In case the TipoArticulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoArticuloUpdateInput, TipoArticuloUncheckedUpdateInput>
  }

  /**
   * TipoArticulo delete
   */
  export type TipoArticuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
    /**
     * Filter which TipoArticulo to delete.
     */
    where: TipoArticuloWhereUniqueInput
  }

  /**
   * TipoArticulo deleteMany
   */
  export type TipoArticuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoArticulos to delete
     */
    where?: TipoArticuloWhereInput
    /**
     * Limit how many TipoArticulos to delete.
     */
    limit?: number
  }

  /**
   * TipoArticulo.articulosOferta
   */
  export type TipoArticulo$articulosOfertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    where?: ArticuloOfertaWhereInput
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    cursor?: ArticuloOfertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * TipoArticulo.articulosPeticion
   */
  export type TipoArticulo$articulosPeticionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    where?: ArticuloPeticionWhereInput
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    cursor?: ArticuloPeticionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * TipoArticulo.articulosSolicitud
   */
  export type TipoArticulo$articulosSolicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    where?: ArticuloSolicitudWhereInput
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    cursor?: ArticuloSolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * TipoArticulo.articulosSolicitados
   */
  export type TipoArticulo$articulosSolicitadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    where?: ArticuloSolicitadoWhereInput
    orderBy?: ArticuloSolicitadoOrderByWithRelationInput | ArticuloSolicitadoOrderByWithRelationInput[]
    cursor?: ArticuloSolicitadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloSolicitadoScalarFieldEnum | ArticuloSolicitadoScalarFieldEnum[]
  }

  /**
   * TipoArticulo without action
   */
  export type TipoArticuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoArticulo
     */
    select?: TipoArticuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoArticulo
     */
    omit?: TipoArticuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoArticuloInclude<ExtArgs> | null
  }


  /**
   * Model CentroDistribucion
   */

  export type AggregateCentroDistribucion = {
    _count: CentroDistribucionCountAggregateOutputType | null
    _avg: CentroDistribucionAvgAggregateOutputType | null
    _sum: CentroDistribucionSumAggregateOutputType | null
    _min: CentroDistribucionMinAggregateOutputType | null
    _max: CentroDistribucionMaxAggregateOutputType | null
  }

  export type CentroDistribucionAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type CentroDistribucionSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type CentroDistribucionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    responsable: string | null
    telefono: string | null
    latitud: number | null
    longitud: number | null
    horarioApertura: string | null
    horarioCierre: string | null
    descripcion: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type CentroDistribucionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    responsable: string | null
    telefono: string | null
    latitud: number | null
    longitud: number | null
    horarioApertura: string | null
    horarioCierre: string | null
    descripcion: string | null
    activo: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type CentroDistribucionCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    responsable: number
    telefono: number
    latitud: number
    longitud: number
    horarioApertura: number
    horarioCierre: number
    descripcion: number
    activo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type CentroDistribucionAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type CentroDistribucionSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type CentroDistribucionMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    latitud?: true
    longitud?: true
    horarioApertura?: true
    horarioCierre?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type CentroDistribucionMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    latitud?: true
    longitud?: true
    horarioApertura?: true
    horarioCierre?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type CentroDistribucionCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    latitud?: true
    longitud?: true
    horarioApertura?: true
    horarioCierre?: true
    descripcion?: true
    activo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type CentroDistribucionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentroDistribucion to aggregate.
     */
    where?: CentroDistribucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroDistribucions to fetch.
     */
    orderBy?: CentroDistribucionOrderByWithRelationInput | CentroDistribucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CentroDistribucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroDistribucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroDistribucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CentroDistribucions
    **/
    _count?: true | CentroDistribucionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CentroDistribucionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CentroDistribucionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CentroDistribucionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CentroDistribucionMaxAggregateInputType
  }

  export type GetCentroDistribucionAggregateType<T extends CentroDistribucionAggregateArgs> = {
        [P in keyof T & keyof AggregateCentroDistribucion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentroDistribucion[P]>
      : GetScalarType<T[P], AggregateCentroDistribucion[P]>
  }




  export type CentroDistribucionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentroDistribucionWhereInput
    orderBy?: CentroDistribucionOrderByWithAggregationInput | CentroDistribucionOrderByWithAggregationInput[]
    by: CentroDistribucionScalarFieldEnum[] | CentroDistribucionScalarFieldEnum
    having?: CentroDistribucionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CentroDistribucionCountAggregateInputType | true
    _avg?: CentroDistribucionAvgAggregateInputType
    _sum?: CentroDistribucionSumAggregateInputType
    _min?: CentroDistribucionMinAggregateInputType
    _max?: CentroDistribucionMaxAggregateInputType
  }

  export type CentroDistribucionGroupByOutputType = {
    id: number
    nombre: string | null
    direccion: string
    responsable: string
    telefono: string | null
    latitud: number
    longitud: number
    horarioApertura: string | null
    horarioCierre: string | null
    descripcion: string | null
    activo: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: CentroDistribucionCountAggregateOutputType | null
    _avg: CentroDistribucionAvgAggregateOutputType | null
    _sum: CentroDistribucionSumAggregateOutputType | null
    _min: CentroDistribucionMinAggregateOutputType | null
    _max: CentroDistribucionMaxAggregateOutputType | null
  }

  type GetCentroDistribucionGroupByPayload<T extends CentroDistribucionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CentroDistribucionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CentroDistribucionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CentroDistribucionGroupByOutputType[P]>
            : GetScalarType<T[P], CentroDistribucionGroupByOutputType[P]>
        }
      >
    >


  export type CentroDistribucionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    articulos?: boolean | CentroDistribucion$articulosArgs<ExtArgs>
    _count?: boolean | CentroDistribucionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centroDistribucion"]>

  export type CentroDistribucionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["centroDistribucion"]>

  export type CentroDistribucionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["centroDistribucion"]>

  export type CentroDistribucionSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    latitud?: boolean
    longitud?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    descripcion?: boolean
    activo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type CentroDistribucionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "responsable" | "telefono" | "latitud" | "longitud" | "horarioApertura" | "horarioCierre" | "descripcion" | "activo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["centroDistribucion"]>
  export type CentroDistribucionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | CentroDistribucion$articulosArgs<ExtArgs>
    _count?: boolean | CentroDistribucionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CentroDistribucionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CentroDistribucionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CentroDistribucionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CentroDistribucion"
    objects: {
      articulos: Prisma.$ArticuloOfertaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      direccion: string
      responsable: string
      telefono: string | null
      latitud: number
      longitud: number
      horarioApertura: string | null
      horarioCierre: string | null
      descripcion: string | null
      activo: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["centroDistribucion"]>
    composites: {}
  }

  type CentroDistribucionGetPayload<S extends boolean | null | undefined | CentroDistribucionDefaultArgs> = $Result.GetResult<Prisma.$CentroDistribucionPayload, S>

  type CentroDistribucionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CentroDistribucionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CentroDistribucionCountAggregateInputType | true
    }

  export interface CentroDistribucionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CentroDistribucion'], meta: { name: 'CentroDistribucion' } }
    /**
     * Find zero or one CentroDistribucion that matches the filter.
     * @param {CentroDistribucionFindUniqueArgs} args - Arguments to find a CentroDistribucion
     * @example
     * // Get one CentroDistribucion
     * const centroDistribucion = await prisma.centroDistribucion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CentroDistribucionFindUniqueArgs>(args: SelectSubset<T, CentroDistribucionFindUniqueArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CentroDistribucion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CentroDistribucionFindUniqueOrThrowArgs} args - Arguments to find a CentroDistribucion
     * @example
     * // Get one CentroDistribucion
     * const centroDistribucion = await prisma.centroDistribucion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CentroDistribucionFindUniqueOrThrowArgs>(args: SelectSubset<T, CentroDistribucionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CentroDistribucion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroDistribucionFindFirstArgs} args - Arguments to find a CentroDistribucion
     * @example
     * // Get one CentroDistribucion
     * const centroDistribucion = await prisma.centroDistribucion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CentroDistribucionFindFirstArgs>(args?: SelectSubset<T, CentroDistribucionFindFirstArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CentroDistribucion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroDistribucionFindFirstOrThrowArgs} args - Arguments to find a CentroDistribucion
     * @example
     * // Get one CentroDistribucion
     * const centroDistribucion = await prisma.centroDistribucion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CentroDistribucionFindFirstOrThrowArgs>(args?: SelectSubset<T, CentroDistribucionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CentroDistribucions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroDistribucionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CentroDistribucions
     * const centroDistribucions = await prisma.centroDistribucion.findMany()
     * 
     * // Get first 10 CentroDistribucions
     * const centroDistribucions = await prisma.centroDistribucion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centroDistribucionWithIdOnly = await prisma.centroDistribucion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CentroDistribucionFindManyArgs>(args?: SelectSubset<T, CentroDistribucionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CentroDistribucion.
     * @param {CentroDistribucionCreateArgs} args - Arguments to create a CentroDistribucion.
     * @example
     * // Create one CentroDistribucion
     * const CentroDistribucion = await prisma.centroDistribucion.create({
     *   data: {
     *     // ... data to create a CentroDistribucion
     *   }
     * })
     * 
     */
    create<T extends CentroDistribucionCreateArgs>(args: SelectSubset<T, CentroDistribucionCreateArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CentroDistribucions.
     * @param {CentroDistribucionCreateManyArgs} args - Arguments to create many CentroDistribucions.
     * @example
     * // Create many CentroDistribucions
     * const centroDistribucion = await prisma.centroDistribucion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CentroDistribucionCreateManyArgs>(args?: SelectSubset<T, CentroDistribucionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CentroDistribucions and returns the data saved in the database.
     * @param {CentroDistribucionCreateManyAndReturnArgs} args - Arguments to create many CentroDistribucions.
     * @example
     * // Create many CentroDistribucions
     * const centroDistribucion = await prisma.centroDistribucion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CentroDistribucions and only return the `id`
     * const centroDistribucionWithIdOnly = await prisma.centroDistribucion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CentroDistribucionCreateManyAndReturnArgs>(args?: SelectSubset<T, CentroDistribucionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CentroDistribucion.
     * @param {CentroDistribucionDeleteArgs} args - Arguments to delete one CentroDistribucion.
     * @example
     * // Delete one CentroDistribucion
     * const CentroDistribucion = await prisma.centroDistribucion.delete({
     *   where: {
     *     // ... filter to delete one CentroDistribucion
     *   }
     * })
     * 
     */
    delete<T extends CentroDistribucionDeleteArgs>(args: SelectSubset<T, CentroDistribucionDeleteArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CentroDistribucion.
     * @param {CentroDistribucionUpdateArgs} args - Arguments to update one CentroDistribucion.
     * @example
     * // Update one CentroDistribucion
     * const centroDistribucion = await prisma.centroDistribucion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CentroDistribucionUpdateArgs>(args: SelectSubset<T, CentroDistribucionUpdateArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CentroDistribucions.
     * @param {CentroDistribucionDeleteManyArgs} args - Arguments to filter CentroDistribucions to delete.
     * @example
     * // Delete a few CentroDistribucions
     * const { count } = await prisma.centroDistribucion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CentroDistribucionDeleteManyArgs>(args?: SelectSubset<T, CentroDistribucionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CentroDistribucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroDistribucionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CentroDistribucions
     * const centroDistribucion = await prisma.centroDistribucion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CentroDistribucionUpdateManyArgs>(args: SelectSubset<T, CentroDistribucionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CentroDistribucions and returns the data updated in the database.
     * @param {CentroDistribucionUpdateManyAndReturnArgs} args - Arguments to update many CentroDistribucions.
     * @example
     * // Update many CentroDistribucions
     * const centroDistribucion = await prisma.centroDistribucion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CentroDistribucions and only return the `id`
     * const centroDistribucionWithIdOnly = await prisma.centroDistribucion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CentroDistribucionUpdateManyAndReturnArgs>(args: SelectSubset<T, CentroDistribucionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CentroDistribucion.
     * @param {CentroDistribucionUpsertArgs} args - Arguments to update or create a CentroDistribucion.
     * @example
     * // Update or create a CentroDistribucion
     * const centroDistribucion = await prisma.centroDistribucion.upsert({
     *   create: {
     *     // ... data to create a CentroDistribucion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CentroDistribucion we want to update
     *   }
     * })
     */
    upsert<T extends CentroDistribucionUpsertArgs>(args: SelectSubset<T, CentroDistribucionUpsertArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CentroDistribucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroDistribucionCountArgs} args - Arguments to filter CentroDistribucions to count.
     * @example
     * // Count the number of CentroDistribucions
     * const count = await prisma.centroDistribucion.count({
     *   where: {
     *     // ... the filter for the CentroDistribucions we want to count
     *   }
     * })
    **/
    count<T extends CentroDistribucionCountArgs>(
      args?: Subset<T, CentroDistribucionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CentroDistribucionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CentroDistribucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroDistribucionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CentroDistribucionAggregateArgs>(args: Subset<T, CentroDistribucionAggregateArgs>): Prisma.PrismaPromise<GetCentroDistribucionAggregateType<T>>

    /**
     * Group by CentroDistribucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroDistribucionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CentroDistribucionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CentroDistribucionGroupByArgs['orderBy'] }
        : { orderBy?: CentroDistribucionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CentroDistribucionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentroDistribucionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CentroDistribucion model
   */
  readonly fields: CentroDistribucionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CentroDistribucion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CentroDistribucionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulos<T extends CentroDistribucion$articulosArgs<ExtArgs> = {}>(args?: Subset<T, CentroDistribucion$articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CentroDistribucion model
   */ 
  interface CentroDistribucionFieldRefs {
    readonly id: FieldRef<"CentroDistribucion", 'Int'>
    readonly nombre: FieldRef<"CentroDistribucion", 'String'>
    readonly direccion: FieldRef<"CentroDistribucion", 'String'>
    readonly responsable: FieldRef<"CentroDistribucion", 'String'>
    readonly telefono: FieldRef<"CentroDistribucion", 'String'>
    readonly latitud: FieldRef<"CentroDistribucion", 'Float'>
    readonly longitud: FieldRef<"CentroDistribucion", 'Float'>
    readonly horarioApertura: FieldRef<"CentroDistribucion", 'String'>
    readonly horarioCierre: FieldRef<"CentroDistribucion", 'String'>
    readonly descripcion: FieldRef<"CentroDistribucion", 'String'>
    readonly activo: FieldRef<"CentroDistribucion", 'Boolean'>
    readonly creadoEn: FieldRef<"CentroDistribucion", 'DateTime'>
    readonly actualizadoEn: FieldRef<"CentroDistribucion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CentroDistribucion findUnique
   */
  export type CentroDistribucionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * Filter, which CentroDistribucion to fetch.
     */
    where: CentroDistribucionWhereUniqueInput
  }

  /**
   * CentroDistribucion findUniqueOrThrow
   */
  export type CentroDistribucionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * Filter, which CentroDistribucion to fetch.
     */
    where: CentroDistribucionWhereUniqueInput
  }

  /**
   * CentroDistribucion findFirst
   */
  export type CentroDistribucionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * Filter, which CentroDistribucion to fetch.
     */
    where?: CentroDistribucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroDistribucions to fetch.
     */
    orderBy?: CentroDistribucionOrderByWithRelationInput | CentroDistribucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentroDistribucions.
     */
    cursor?: CentroDistribucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroDistribucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroDistribucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentroDistribucions.
     */
    distinct?: CentroDistribucionScalarFieldEnum | CentroDistribucionScalarFieldEnum[]
  }

  /**
   * CentroDistribucion findFirstOrThrow
   */
  export type CentroDistribucionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * Filter, which CentroDistribucion to fetch.
     */
    where?: CentroDistribucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroDistribucions to fetch.
     */
    orderBy?: CentroDistribucionOrderByWithRelationInput | CentroDistribucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentroDistribucions.
     */
    cursor?: CentroDistribucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroDistribucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroDistribucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentroDistribucions.
     */
    distinct?: CentroDistribucionScalarFieldEnum | CentroDistribucionScalarFieldEnum[]
  }

  /**
   * CentroDistribucion findMany
   */
  export type CentroDistribucionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * Filter, which CentroDistribucions to fetch.
     */
    where?: CentroDistribucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroDistribucions to fetch.
     */
    orderBy?: CentroDistribucionOrderByWithRelationInput | CentroDistribucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CentroDistribucions.
     */
    cursor?: CentroDistribucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroDistribucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroDistribucions.
     */
    skip?: number
    distinct?: CentroDistribucionScalarFieldEnum | CentroDistribucionScalarFieldEnum[]
  }

  /**
   * CentroDistribucion create
   */
  export type CentroDistribucionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * The data needed to create a CentroDistribucion.
     */
    data: XOR<CentroDistribucionCreateInput, CentroDistribucionUncheckedCreateInput>
  }

  /**
   * CentroDistribucion createMany
   */
  export type CentroDistribucionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CentroDistribucions.
     */
    data: CentroDistribucionCreateManyInput | CentroDistribucionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CentroDistribucion createManyAndReturn
   */
  export type CentroDistribucionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * The data used to create many CentroDistribucions.
     */
    data: CentroDistribucionCreateManyInput | CentroDistribucionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CentroDistribucion update
   */
  export type CentroDistribucionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * The data needed to update a CentroDistribucion.
     */
    data: XOR<CentroDistribucionUpdateInput, CentroDistribucionUncheckedUpdateInput>
    /**
     * Choose, which CentroDistribucion to update.
     */
    where: CentroDistribucionWhereUniqueInput
  }

  /**
   * CentroDistribucion updateMany
   */
  export type CentroDistribucionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CentroDistribucions.
     */
    data: XOR<CentroDistribucionUpdateManyMutationInput, CentroDistribucionUncheckedUpdateManyInput>
    /**
     * Filter which CentroDistribucions to update
     */
    where?: CentroDistribucionWhereInput
    /**
     * Limit how many CentroDistribucions to update.
     */
    limit?: number
  }

  /**
   * CentroDistribucion updateManyAndReturn
   */
  export type CentroDistribucionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * The data used to update CentroDistribucions.
     */
    data: XOR<CentroDistribucionUpdateManyMutationInput, CentroDistribucionUncheckedUpdateManyInput>
    /**
     * Filter which CentroDistribucions to update
     */
    where?: CentroDistribucionWhereInput
    /**
     * Limit how many CentroDistribucions to update.
     */
    limit?: number
  }

  /**
   * CentroDistribucion upsert
   */
  export type CentroDistribucionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * The filter to search for the CentroDistribucion to update in case it exists.
     */
    where: CentroDistribucionWhereUniqueInput
    /**
     * In case the CentroDistribucion found by the `where` argument doesn't exist, create a new CentroDistribucion with this data.
     */
    create: XOR<CentroDistribucionCreateInput, CentroDistribucionUncheckedCreateInput>
    /**
     * In case the CentroDistribucion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CentroDistribucionUpdateInput, CentroDistribucionUncheckedUpdateInput>
  }

  /**
   * CentroDistribucion delete
   */
  export type CentroDistribucionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
    /**
     * Filter which CentroDistribucion to delete.
     */
    where: CentroDistribucionWhereUniqueInput
  }

  /**
   * CentroDistribucion deleteMany
   */
  export type CentroDistribucionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentroDistribucions to delete
     */
    where?: CentroDistribucionWhereInput
    /**
     * Limit how many CentroDistribucions to delete.
     */
    limit?: number
  }

  /**
   * CentroDistribucion.articulos
   */
  export type CentroDistribucion$articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    where?: ArticuloOfertaWhereInput
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    cursor?: ArticuloOfertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * CentroDistribucion without action
   */
  export type CentroDistribucionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroDistribucion
     */
    select?: CentroDistribucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroDistribucion
     */
    omit?: CentroDistribucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CentroDistribucionInclude<ExtArgs> | null
  }


  /**
   * Model ArticuloOferta
   */

  export type AggregateArticuloOferta = {
    _count: ArticuloOfertaCountAggregateOutputType | null
    _avg: ArticuloOfertaAvgAggregateOutputType | null
    _sum: ArticuloOfertaSumAggregateOutputType | null
    _min: ArticuloOfertaMinAggregateOutputType | null
    _max: ArticuloOfertaMaxAggregateOutputType | null
  }

  export type ArticuloOfertaAvgAggregateOutputType = {
    id: number | null
    centroDistribucionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloOfertaSumAggregateOutputType = {
    id: number | null
    centroDistribucionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloOfertaMinAggregateOutputType = {
    id: number | null
    centroDistribucionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ArticuloOfertaMaxAggregateOutputType = {
    id: number | null
    centroDistribucionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ArticuloOfertaCountAggregateOutputType = {
    id: number
    centroDistribucionId: number
    tipoArticuloId: number
    cantidad: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ArticuloOfertaAvgAggregateInputType = {
    id?: true
    centroDistribucionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloOfertaSumAggregateInputType = {
    id?: true
    centroDistribucionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloOfertaMinAggregateInputType = {
    id?: true
    centroDistribucionId?: true
    tipoArticuloId?: true
    cantidad?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ArticuloOfertaMaxAggregateInputType = {
    id?: true
    centroDistribucionId?: true
    tipoArticuloId?: true
    cantidad?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ArticuloOfertaCountAggregateInputType = {
    id?: true
    centroDistribucionId?: true
    tipoArticuloId?: true
    cantidad?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ArticuloOfertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloOferta to aggregate.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticuloOfertas
    **/
    _count?: true | ArticuloOfertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloOfertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloOfertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloOfertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloOfertaMaxAggregateInputType
  }

  export type GetArticuloOfertaAggregateType<T extends ArticuloOfertaAggregateArgs> = {
        [P in keyof T & keyof AggregateArticuloOferta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticuloOferta[P]>
      : GetScalarType<T[P], AggregateArticuloOferta[P]>
  }




  export type ArticuloOfertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloOfertaWhereInput
    orderBy?: ArticuloOfertaOrderByWithAggregationInput | ArticuloOfertaOrderByWithAggregationInput[]
    by: ArticuloOfertaScalarFieldEnum[] | ArticuloOfertaScalarFieldEnum
    having?: ArticuloOfertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloOfertaCountAggregateInputType | true
    _avg?: ArticuloOfertaAvgAggregateInputType
    _sum?: ArticuloOfertaSumAggregateInputType
    _min?: ArticuloOfertaMinAggregateInputType
    _max?: ArticuloOfertaMaxAggregateInputType
  }

  export type ArticuloOfertaGroupByOutputType = {
    id: number
    centroDistribucionId: number
    tipoArticuloId: number
    cantidad: number
    estado: string
    creadoEn: Date
    actualizadoEn: Date
    _count: ArticuloOfertaCountAggregateOutputType | null
    _avg: ArticuloOfertaAvgAggregateOutputType | null
    _sum: ArticuloOfertaSumAggregateOutputType | null
    _min: ArticuloOfertaMinAggregateOutputType | null
    _max: ArticuloOfertaMaxAggregateOutputType | null
  }

  type GetArticuloOfertaGroupByPayload<T extends ArticuloOfertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloOfertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloOfertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloOfertaGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloOfertaGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloOfertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centroDistribucionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    centroDistribucion?: boolean | CentroDistribucionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloOferta"]>

  export type ArticuloOfertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centroDistribucionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    centroDistribucion?: boolean | CentroDistribucionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloOferta"]>

  export type ArticuloOfertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centroDistribucionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    centroDistribucion?: boolean | CentroDistribucionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloOferta"]>

  export type ArticuloOfertaSelectScalar = {
    id?: boolean
    centroDistribucionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ArticuloOfertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "centroDistribucionId" | "tipoArticuloId" | "cantidad" | "estado" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["articuloOferta"]>
  export type ArticuloOfertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centroDistribucion?: boolean | CentroDistribucionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloOfertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centroDistribucion?: boolean | CentroDistribucionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloOfertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centroDistribucion?: boolean | CentroDistribucionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }

  export type $ArticuloOfertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticuloOferta"
    objects: {
      centroDistribucion: Prisma.$CentroDistribucionPayload<ExtArgs>
      tipoArticulo: Prisma.$TipoArticuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      centroDistribucionId: number
      tipoArticuloId: number
      cantidad: number
      estado: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["articuloOferta"]>
    composites: {}
  }

  type ArticuloOfertaGetPayload<S extends boolean | null | undefined | ArticuloOfertaDefaultArgs> = $Result.GetResult<Prisma.$ArticuloOfertaPayload, S>

  type ArticuloOfertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloOfertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloOfertaCountAggregateInputType | true
    }

  export interface ArticuloOfertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticuloOferta'], meta: { name: 'ArticuloOferta' } }
    /**
     * Find zero or one ArticuloOferta that matches the filter.
     * @param {ArticuloOfertaFindUniqueArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloOfertaFindUniqueArgs>(args: SelectSubset<T, ArticuloOfertaFindUniqueArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticuloOferta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloOfertaFindUniqueOrThrowArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloOfertaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloOfertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloOferta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaFindFirstArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloOfertaFindFirstArgs>(args?: SelectSubset<T, ArticuloOfertaFindFirstArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloOferta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaFindFirstOrThrowArgs} args - Arguments to find a ArticuloOferta
     * @example
     * // Get one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloOfertaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloOfertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticuloOfertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticuloOfertas
     * const articuloOfertas = await prisma.articuloOferta.findMany()
     * 
     * // Get first 10 ArticuloOfertas
     * const articuloOfertas = await prisma.articuloOferta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloOfertaWithIdOnly = await prisma.articuloOferta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloOfertaFindManyArgs>(args?: SelectSubset<T, ArticuloOfertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticuloOferta.
     * @param {ArticuloOfertaCreateArgs} args - Arguments to create a ArticuloOferta.
     * @example
     * // Create one ArticuloOferta
     * const ArticuloOferta = await prisma.articuloOferta.create({
     *   data: {
     *     // ... data to create a ArticuloOferta
     *   }
     * })
     * 
     */
    create<T extends ArticuloOfertaCreateArgs>(args: SelectSubset<T, ArticuloOfertaCreateArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticuloOfertas.
     * @param {ArticuloOfertaCreateManyArgs} args - Arguments to create many ArticuloOfertas.
     * @example
     * // Create many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloOfertaCreateManyArgs>(args?: SelectSubset<T, ArticuloOfertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticuloOfertas and returns the data saved in the database.
     * @param {ArticuloOfertaCreateManyAndReturnArgs} args - Arguments to create many ArticuloOfertas.
     * @example
     * // Create many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticuloOfertas and only return the `id`
     * const articuloOfertaWithIdOnly = await prisma.articuloOferta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloOfertaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloOfertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticuloOferta.
     * @param {ArticuloOfertaDeleteArgs} args - Arguments to delete one ArticuloOferta.
     * @example
     * // Delete one ArticuloOferta
     * const ArticuloOferta = await prisma.articuloOferta.delete({
     *   where: {
     *     // ... filter to delete one ArticuloOferta
     *   }
     * })
     * 
     */
    delete<T extends ArticuloOfertaDeleteArgs>(args: SelectSubset<T, ArticuloOfertaDeleteArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticuloOferta.
     * @param {ArticuloOfertaUpdateArgs} args - Arguments to update one ArticuloOferta.
     * @example
     * // Update one ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloOfertaUpdateArgs>(args: SelectSubset<T, ArticuloOfertaUpdateArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticuloOfertas.
     * @param {ArticuloOfertaDeleteManyArgs} args - Arguments to filter ArticuloOfertas to delete.
     * @example
     * // Delete a few ArticuloOfertas
     * const { count } = await prisma.articuloOferta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloOfertaDeleteManyArgs>(args?: SelectSubset<T, ArticuloOfertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloOfertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloOfertaUpdateManyArgs>(args: SelectSubset<T, ArticuloOfertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloOfertas and returns the data updated in the database.
     * @param {ArticuloOfertaUpdateManyAndReturnArgs} args - Arguments to update many ArticuloOfertas.
     * @example
     * // Update many ArticuloOfertas
     * const articuloOferta = await prisma.articuloOferta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticuloOfertas and only return the `id`
     * const articuloOfertaWithIdOnly = await prisma.articuloOferta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticuloOfertaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloOfertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticuloOferta.
     * @param {ArticuloOfertaUpsertArgs} args - Arguments to update or create a ArticuloOferta.
     * @example
     * // Update or create a ArticuloOferta
     * const articuloOferta = await prisma.articuloOferta.upsert({
     *   create: {
     *     // ... data to create a ArticuloOferta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticuloOferta we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloOfertaUpsertArgs>(args: SelectSubset<T, ArticuloOfertaUpsertArgs<ExtArgs>>): Prisma__ArticuloOfertaClient<$Result.GetResult<Prisma.$ArticuloOfertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticuloOfertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaCountArgs} args - Arguments to filter ArticuloOfertas to count.
     * @example
     * // Count the number of ArticuloOfertas
     * const count = await prisma.articuloOferta.count({
     *   where: {
     *     // ... the filter for the ArticuloOfertas we want to count
     *   }
     * })
    **/
    count<T extends ArticuloOfertaCountArgs>(
      args?: Subset<T, ArticuloOfertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloOfertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticuloOferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloOfertaAggregateArgs>(args: Subset<T, ArticuloOfertaAggregateArgs>): Prisma.PrismaPromise<GetArticuloOfertaAggregateType<T>>

    /**
     * Group by ArticuloOferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloOfertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticuloOfertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloOfertaGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloOfertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticuloOfertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloOfertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticuloOferta model
   */
  readonly fields: ArticuloOfertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticuloOferta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloOfertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    centroDistribucion<T extends CentroDistribucionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CentroDistribucionDefaultArgs<ExtArgs>>): Prisma__CentroDistribucionClient<$Result.GetResult<Prisma.$CentroDistribucionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoArticulo<T extends TipoArticuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticuloDefaultArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticuloOferta model
   */ 
  interface ArticuloOfertaFieldRefs {
    readonly id: FieldRef<"ArticuloOferta", 'Int'>
    readonly centroDistribucionId: FieldRef<"ArticuloOferta", 'Int'>
    readonly tipoArticuloId: FieldRef<"ArticuloOferta", 'Int'>
    readonly cantidad: FieldRef<"ArticuloOferta", 'Int'>
    readonly estado: FieldRef<"ArticuloOferta", 'String'>
    readonly creadoEn: FieldRef<"ArticuloOferta", 'DateTime'>
    readonly actualizadoEn: FieldRef<"ArticuloOferta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticuloOferta findUnique
   */
  export type ArticuloOfertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta findUniqueOrThrow
   */
  export type ArticuloOfertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta findFirst
   */
  export type ArticuloOfertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloOfertas.
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloOfertas.
     */
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * ArticuloOferta findFirstOrThrow
   */
  export type ArticuloOfertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOferta to fetch.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloOfertas.
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloOfertas.
     */
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * ArticuloOferta findMany
   */
  export type ArticuloOfertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloOfertas to fetch.
     */
    where?: ArticuloOfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloOfertas to fetch.
     */
    orderBy?: ArticuloOfertaOrderByWithRelationInput | ArticuloOfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticuloOfertas.
     */
    cursor?: ArticuloOfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloOfertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloOfertas.
     */
    skip?: number
    distinct?: ArticuloOfertaScalarFieldEnum | ArticuloOfertaScalarFieldEnum[]
  }

  /**
   * ArticuloOferta create
   */
  export type ArticuloOfertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticuloOferta.
     */
    data: XOR<ArticuloOfertaCreateInput, ArticuloOfertaUncheckedCreateInput>
  }

  /**
   * ArticuloOferta createMany
   */
  export type ArticuloOfertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticuloOfertas.
     */
    data: ArticuloOfertaCreateManyInput | ArticuloOfertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticuloOferta createManyAndReturn
   */
  export type ArticuloOfertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * The data used to create many ArticuloOfertas.
     */
    data: ArticuloOfertaCreateManyInput | ArticuloOfertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloOferta update
   */
  export type ArticuloOfertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticuloOferta.
     */
    data: XOR<ArticuloOfertaUpdateInput, ArticuloOfertaUncheckedUpdateInput>
    /**
     * Choose, which ArticuloOferta to update.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta updateMany
   */
  export type ArticuloOfertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticuloOfertas.
     */
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloOfertas to update
     */
    where?: ArticuloOfertaWhereInput
    /**
     * Limit how many ArticuloOfertas to update.
     */
    limit?: number
  }

  /**
   * ArticuloOferta updateManyAndReturn
   */
  export type ArticuloOfertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * The data used to update ArticuloOfertas.
     */
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloOfertas to update
     */
    where?: ArticuloOfertaWhereInput
    /**
     * Limit how many ArticuloOfertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloOferta upsert
   */
  export type ArticuloOfertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticuloOferta to update in case it exists.
     */
    where: ArticuloOfertaWhereUniqueInput
    /**
     * In case the ArticuloOferta found by the `where` argument doesn't exist, create a new ArticuloOferta with this data.
     */
    create: XOR<ArticuloOfertaCreateInput, ArticuloOfertaUncheckedCreateInput>
    /**
     * In case the ArticuloOferta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloOfertaUpdateInput, ArticuloOfertaUncheckedUpdateInput>
  }

  /**
   * ArticuloOferta delete
   */
  export type ArticuloOfertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
    /**
     * Filter which ArticuloOferta to delete.
     */
    where: ArticuloOfertaWhereUniqueInput
  }

  /**
   * ArticuloOferta deleteMany
   */
  export type ArticuloOfertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloOfertas to delete
     */
    where?: ArticuloOfertaWhereInput
    /**
     * Limit how many ArticuloOfertas to delete.
     */
    limit?: number
  }

  /**
   * ArticuloOferta without action
   */
  export type ArticuloOfertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloOferta
     */
    select?: ArticuloOfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloOferta
     */
    omit?: ArticuloOfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloOfertaInclude<ExtArgs> | null
  }


  /**
   * Model Solicitud
   */

  export type AggregateSolicitud = {
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  export type SolicitudAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudMinAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    estado: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type SolicitudMaxAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    estado: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type SolicitudCountAggregateOutputType = {
    id: number
    direccion: number
    contactoNombre: number
    contactoTel: number
    estado: number
    latitud: number
    longitud: number
    descripcion: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type SolicitudAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudMinAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type SolicitudMaxAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type SolicitudCountAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    estado?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type SolicitudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitud to aggregate.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicituds
    **/
    _count?: true | SolicitudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudMaxAggregateInputType
  }

  export type GetSolicitudAggregateType<T extends SolicitudAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud[P]>
      : GetScalarType<T[P], AggregateSolicitud[P]>
  }




  export type SolicitudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithAggregationInput | SolicitudOrderByWithAggregationInput[]
    by: SolicitudScalarFieldEnum[] | SolicitudScalarFieldEnum
    having?: SolicitudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudCountAggregateInputType | true
    _avg?: SolicitudAvgAggregateInputType
    _sum?: SolicitudSumAggregateInputType
    _min?: SolicitudMinAggregateInputType
    _max?: SolicitudMaxAggregateInputType
  }

  export type SolicitudGroupByOutputType = {
    id: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado: string
    latitud: number
    longitud: number
    descripcion: string | null
    creadoEn: Date
    actualizadoEn: Date
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  type GetSolicitudGroupByPayload<T extends SolicitudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    articulos?: boolean | Solicitud$articulosArgs<ExtArgs>
    _count?: boolean | SolicitudCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectScalar = {
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    estado?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type SolicitudOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "direccion" | "contactoNombre" | "contactoTel" | "estado" | "latitud" | "longitud" | "descripcion" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["solicitud"]>
  export type SolicitudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | Solicitud$articulosArgs<ExtArgs>
    _count?: boolean | SolicitudCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SolicitudIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SolicitudIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SolicitudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitud"
    objects: {
      articulos: Prisma.$ArticuloSolicitudPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      direccion: string
      contactoNombre: string
      contactoTel: string
      estado: string
      latitud: number
      longitud: number
      descripcion: string | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["solicitud"]>
    composites: {}
  }

  type SolicitudGetPayload<S extends boolean | null | undefined | SolicitudDefaultArgs> = $Result.GetResult<Prisma.$SolicitudPayload, S>

  type SolicitudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudCountAggregateInputType | true
    }

  export interface SolicitudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitud'], meta: { name: 'Solicitud' } }
    /**
     * Find zero or one Solicitud that matches the filter.
     * @param {SolicitudFindUniqueArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudFindUniqueArgs>(args: SelectSubset<T, SolicitudFindUniqueArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudFindUniqueOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudFindFirstArgs>(args?: SelectSubset<T, SolicitudFindFirstArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicituds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicituds
     * const solicituds = await prisma.solicitud.findMany()
     * 
     * // Get first 10 Solicituds
     * const solicituds = await prisma.solicitud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudFindManyArgs>(args?: SelectSubset<T, SolicitudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitud.
     * @param {SolicitudCreateArgs} args - Arguments to create a Solicitud.
     * @example
     * // Create one Solicitud
     * const Solicitud = await prisma.solicitud.create({
     *   data: {
     *     // ... data to create a Solicitud
     *   }
     * })
     * 
     */
    create<T extends SolicitudCreateArgs>(args: SelectSubset<T, SolicitudCreateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicituds.
     * @param {SolicitudCreateManyArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudCreateManyArgs>(args?: SelectSubset<T, SolicitudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicituds and returns the data saved in the database.
     * @param {SolicitudCreateManyAndReturnArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitud.
     * @param {SolicitudDeleteArgs} args - Arguments to delete one Solicitud.
     * @example
     * // Delete one Solicitud
     * const Solicitud = await prisma.solicitud.delete({
     *   where: {
     *     // ... filter to delete one Solicitud
     *   }
     * })
     * 
     */
    delete<T extends SolicitudDeleteArgs>(args: SelectSubset<T, SolicitudDeleteArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitud.
     * @param {SolicitudUpdateArgs} args - Arguments to update one Solicitud.
     * @example
     * // Update one Solicitud
     * const solicitud = await prisma.solicitud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudUpdateArgs>(args: SelectSubset<T, SolicitudUpdateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicituds.
     * @param {SolicitudDeleteManyArgs} args - Arguments to filter Solicituds to delete.
     * @example
     * // Delete a few Solicituds
     * const { count } = await prisma.solicitud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudDeleteManyArgs>(args?: SelectSubset<T, SolicitudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudUpdateManyArgs>(args: SelectSubset<T, SolicitudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds and returns the data updated in the database.
     * @param {SolicitudUpdateManyAndReturnArgs} args - Arguments to update many Solicituds.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolicitudUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitud.
     * @param {SolicitudUpsertArgs} args - Arguments to update or create a Solicitud.
     * @example
     * // Update or create a Solicitud
     * const solicitud = await prisma.solicitud.upsert({
     *   create: {
     *     // ... data to create a Solicitud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudUpsertArgs>(args: SelectSubset<T, SolicitudUpsertArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCountArgs} args - Arguments to filter Solicituds to count.
     * @example
     * // Count the number of Solicituds
     * const count = await prisma.solicitud.count({
     *   where: {
     *     // ... the filter for the Solicituds we want to count
     *   }
     * })
    **/
    count<T extends SolicitudCountArgs>(
      args?: Subset<T, SolicitudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolicitudAggregateArgs>(args: Subset<T, SolicitudAggregateArgs>): Prisma.PrismaPromise<GetSolicitudAggregateType<T>>

    /**
     * Group by Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolicitudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolicitudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitud model
   */
  readonly fields: SolicitudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulos<T extends Solicitud$articulosArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Solicitud model
   */ 
  interface SolicitudFieldRefs {
    readonly id: FieldRef<"Solicitud", 'Int'>
    readonly direccion: FieldRef<"Solicitud", 'String'>
    readonly contactoNombre: FieldRef<"Solicitud", 'String'>
    readonly contactoTel: FieldRef<"Solicitud", 'String'>
    readonly estado: FieldRef<"Solicitud", 'String'>
    readonly latitud: FieldRef<"Solicitud", 'Float'>
    readonly longitud: FieldRef<"Solicitud", 'Float'>
    readonly descripcion: FieldRef<"Solicitud", 'String'>
    readonly creadoEn: FieldRef<"Solicitud", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Solicitud", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solicitud findUnique
   */
  export type SolicitudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findUniqueOrThrow
   */
  export type SolicitudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findFirst
   */
  export type SolicitudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findFirstOrThrow
   */
  export type SolicitudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findMany
   */
  export type SolicitudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicituds to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud create
   */
  export type SolicitudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to create a Solicitud.
     */
    data: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
  }

  /**
   * Solicitud createMany
   */
  export type SolicitudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitud createManyAndReturn
   */
  export type SolicitudCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitud update
   */
  export type SolicitudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to update a Solicitud.
     */
    data: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
    /**
     * Choose, which Solicitud to update.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud updateMany
   */
  export type SolicitudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
  }

  /**
   * Solicitud updateManyAndReturn
   */
  export type SolicitudUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
  }

  /**
   * Solicitud upsert
   */
  export type SolicitudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The filter to search for the Solicitud to update in case it exists.
     */
    where: SolicitudWhereUniqueInput
    /**
     * In case the Solicitud found by the `where` argument doesn't exist, create a new Solicitud with this data.
     */
    create: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
    /**
     * In case the Solicitud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
  }

  /**
   * Solicitud delete
   */
  export type SolicitudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter which Solicitud to delete.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud deleteMany
   */
  export type SolicitudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicituds to delete
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to delete.
     */
    limit?: number
  }

  /**
   * Solicitud.articulos
   */
  export type Solicitud$articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    where?: ArticuloSolicitudWhereInput
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    cursor?: ArticuloSolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud without action
   */
  export type SolicitudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
  }


  /**
   * Model ArticuloSolicitud
   */

  export type AggregateArticuloSolicitud = {
    _count: ArticuloSolicitudCountAggregateOutputType | null
    _avg: ArticuloSolicitudAvgAggregateOutputType | null
    _sum: ArticuloSolicitudSumAggregateOutputType | null
    _min: ArticuloSolicitudMinAggregateOutputType | null
    _max: ArticuloSolicitudMaxAggregateOutputType | null
  }

  export type ArticuloSolicitudAvgAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitudSumAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitudMinAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloSolicitudMaxAggregateOutputType = {
    id: number | null
    solicitudId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloSolicitudCountAggregateOutputType = {
    id: number
    solicitudId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn: number
    _all: number
  }


  export type ArticuloSolicitudAvgAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloSolicitudSumAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloSolicitudMinAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloSolicitudMaxAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloSolicitudCountAggregateInputType = {
    id?: true
    solicitudId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
    _all?: true
  }

  export type ArticuloSolicitudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloSolicitud to aggregate.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticuloSolicituds
    **/
    _count?: true | ArticuloSolicitudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloSolicitudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloSolicitudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloSolicitudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloSolicitudMaxAggregateInputType
  }

  export type GetArticuloSolicitudAggregateType<T extends ArticuloSolicitudAggregateArgs> = {
        [P in keyof T & keyof AggregateArticuloSolicitud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticuloSolicitud[P]>
      : GetScalarType<T[P], AggregateArticuloSolicitud[P]>
  }




  export type ArticuloSolicitudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitudWhereInput
    orderBy?: ArticuloSolicitudOrderByWithAggregationInput | ArticuloSolicitudOrderByWithAggregationInput[]
    by: ArticuloSolicitudScalarFieldEnum[] | ArticuloSolicitudScalarFieldEnum
    having?: ArticuloSolicitudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloSolicitudCountAggregateInputType | true
    _avg?: ArticuloSolicitudAvgAggregateInputType
    _sum?: ArticuloSolicitudSumAggregateInputType
    _min?: ArticuloSolicitudMinAggregateInputType
    _max?: ArticuloSolicitudMaxAggregateInputType
  }

  export type ArticuloSolicitudGroupByOutputType = {
    id: number
    solicitudId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn: Date
    _count: ArticuloSolicitudCountAggregateOutputType | null
    _avg: ArticuloSolicitudAvgAggregateOutputType | null
    _sum: ArticuloSolicitudSumAggregateOutputType | null
    _min: ArticuloSolicitudMinAggregateOutputType | null
    _max: ArticuloSolicitudMaxAggregateOutputType | null
  }

  type GetArticuloSolicitudGroupByPayload<T extends ArticuloSolicitudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloSolicitudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloSolicitudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloSolicitudGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloSolicitudGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloSolicitudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitud"]>

  export type ArticuloSolicitudSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitud"]>

  export type ArticuloSolicitudSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitud"]>

  export type ArticuloSolicitudSelectScalar = {
    id?: boolean
    solicitudId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
  }

  export type ArticuloSolicitudOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solicitudId" | "tipoArticuloId" | "cantidad" | "creadoEn", ExtArgs["result"]["articuloSolicitud"]>
  export type ArticuloSolicitudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloSolicitudIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloSolicitudIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitud?: boolean | SolicitudDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }

  export type $ArticuloSolicitudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticuloSolicitud"
    objects: {
      solicitud: Prisma.$SolicitudPayload<ExtArgs>
      tipoArticulo: Prisma.$TipoArticuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      solicitudId: number
      tipoArticuloId: number
      cantidad: number
      creadoEn: Date
    }, ExtArgs["result"]["articuloSolicitud"]>
    composites: {}
  }

  type ArticuloSolicitudGetPayload<S extends boolean | null | undefined | ArticuloSolicitudDefaultArgs> = $Result.GetResult<Prisma.$ArticuloSolicitudPayload, S>

  type ArticuloSolicitudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloSolicitudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloSolicitudCountAggregateInputType | true
    }

  export interface ArticuloSolicitudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticuloSolicitud'], meta: { name: 'ArticuloSolicitud' } }
    /**
     * Find zero or one ArticuloSolicitud that matches the filter.
     * @param {ArticuloSolicitudFindUniqueArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloSolicitudFindUniqueArgs>(args: SelectSubset<T, ArticuloSolicitudFindUniqueArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticuloSolicitud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloSolicitudFindUniqueOrThrowArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloSolicitudFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloSolicitudFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloSolicitud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudFindFirstArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloSolicitudFindFirstArgs>(args?: SelectSubset<T, ArticuloSolicitudFindFirstArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloSolicitud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudFindFirstOrThrowArgs} args - Arguments to find a ArticuloSolicitud
     * @example
     * // Get one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloSolicitudFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloSolicitudFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticuloSolicituds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticuloSolicituds
     * const articuloSolicituds = await prisma.articuloSolicitud.findMany()
     * 
     * // Get first 10 ArticuloSolicituds
     * const articuloSolicituds = await prisma.articuloSolicitud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloSolicitudWithIdOnly = await prisma.articuloSolicitud.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloSolicitudFindManyArgs>(args?: SelectSubset<T, ArticuloSolicitudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticuloSolicitud.
     * @param {ArticuloSolicitudCreateArgs} args - Arguments to create a ArticuloSolicitud.
     * @example
     * // Create one ArticuloSolicitud
     * const ArticuloSolicitud = await prisma.articuloSolicitud.create({
     *   data: {
     *     // ... data to create a ArticuloSolicitud
     *   }
     * })
     * 
     */
    create<T extends ArticuloSolicitudCreateArgs>(args: SelectSubset<T, ArticuloSolicitudCreateArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticuloSolicituds.
     * @param {ArticuloSolicitudCreateManyArgs} args - Arguments to create many ArticuloSolicituds.
     * @example
     * // Create many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloSolicitudCreateManyArgs>(args?: SelectSubset<T, ArticuloSolicitudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticuloSolicituds and returns the data saved in the database.
     * @param {ArticuloSolicitudCreateManyAndReturnArgs} args - Arguments to create many ArticuloSolicituds.
     * @example
     * // Create many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticuloSolicituds and only return the `id`
     * const articuloSolicitudWithIdOnly = await prisma.articuloSolicitud.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloSolicitudCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloSolicitudCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticuloSolicitud.
     * @param {ArticuloSolicitudDeleteArgs} args - Arguments to delete one ArticuloSolicitud.
     * @example
     * // Delete one ArticuloSolicitud
     * const ArticuloSolicitud = await prisma.articuloSolicitud.delete({
     *   where: {
     *     // ... filter to delete one ArticuloSolicitud
     *   }
     * })
     * 
     */
    delete<T extends ArticuloSolicitudDeleteArgs>(args: SelectSubset<T, ArticuloSolicitudDeleteArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticuloSolicitud.
     * @param {ArticuloSolicitudUpdateArgs} args - Arguments to update one ArticuloSolicitud.
     * @example
     * // Update one ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloSolicitudUpdateArgs>(args: SelectSubset<T, ArticuloSolicitudUpdateArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticuloSolicituds.
     * @param {ArticuloSolicitudDeleteManyArgs} args - Arguments to filter ArticuloSolicituds to delete.
     * @example
     * // Delete a few ArticuloSolicituds
     * const { count } = await prisma.articuloSolicitud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloSolicitudDeleteManyArgs>(args?: SelectSubset<T, ArticuloSolicitudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloSolicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloSolicitudUpdateManyArgs>(args: SelectSubset<T, ArticuloSolicitudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloSolicituds and returns the data updated in the database.
     * @param {ArticuloSolicitudUpdateManyAndReturnArgs} args - Arguments to update many ArticuloSolicituds.
     * @example
     * // Update many ArticuloSolicituds
     * const articuloSolicitud = await prisma.articuloSolicitud.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticuloSolicituds and only return the `id`
     * const articuloSolicitudWithIdOnly = await prisma.articuloSolicitud.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticuloSolicitudUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloSolicitudUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticuloSolicitud.
     * @param {ArticuloSolicitudUpsertArgs} args - Arguments to update or create a ArticuloSolicitud.
     * @example
     * // Update or create a ArticuloSolicitud
     * const articuloSolicitud = await prisma.articuloSolicitud.upsert({
     *   create: {
     *     // ... data to create a ArticuloSolicitud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticuloSolicitud we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloSolicitudUpsertArgs>(args: SelectSubset<T, ArticuloSolicitudUpsertArgs<ExtArgs>>): Prisma__ArticuloSolicitudClient<$Result.GetResult<Prisma.$ArticuloSolicitudPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticuloSolicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudCountArgs} args - Arguments to filter ArticuloSolicituds to count.
     * @example
     * // Count the number of ArticuloSolicituds
     * const count = await prisma.articuloSolicitud.count({
     *   where: {
     *     // ... the filter for the ArticuloSolicituds we want to count
     *   }
     * })
    **/
    count<T extends ArticuloSolicitudCountArgs>(
      args?: Subset<T, ArticuloSolicitudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloSolicitudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticuloSolicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloSolicitudAggregateArgs>(args: Subset<T, ArticuloSolicitudAggregateArgs>): Prisma.PrismaPromise<GetArticuloSolicitudAggregateType<T>>

    /**
     * Group by ArticuloSolicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitudGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticuloSolicitudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloSolicitudGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloSolicitudGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticuloSolicitudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloSolicitudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticuloSolicitud model
   */
  readonly fields: ArticuloSolicitudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticuloSolicitud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloSolicitudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitud<T extends SolicitudDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolicitudDefaultArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoArticulo<T extends TipoArticuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticuloDefaultArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticuloSolicitud model
   */ 
  interface ArticuloSolicitudFieldRefs {
    readonly id: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly solicitudId: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly tipoArticuloId: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly cantidad: FieldRef<"ArticuloSolicitud", 'Int'>
    readonly creadoEn: FieldRef<"ArticuloSolicitud", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticuloSolicitud findUnique
   */
  export type ArticuloSolicitudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud findUniqueOrThrow
   */
  export type ArticuloSolicitudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud findFirst
   */
  export type ArticuloSolicitudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloSolicituds.
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloSolicituds.
     */
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitud findFirstOrThrow
   */
  export type ArticuloSolicitudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitud to fetch.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloSolicituds.
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloSolicituds.
     */
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitud findMany
   */
  export type ArticuloSolicitudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicituds to fetch.
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicituds to fetch.
     */
    orderBy?: ArticuloSolicitudOrderByWithRelationInput | ArticuloSolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticuloSolicituds.
     */
    cursor?: ArticuloSolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicituds.
     */
    skip?: number
    distinct?: ArticuloSolicitudScalarFieldEnum | ArticuloSolicitudScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitud create
   */
  export type ArticuloSolicitudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticuloSolicitud.
     */
    data: XOR<ArticuloSolicitudCreateInput, ArticuloSolicitudUncheckedCreateInput>
  }

  /**
   * ArticuloSolicitud createMany
   */
  export type ArticuloSolicitudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticuloSolicituds.
     */
    data: ArticuloSolicitudCreateManyInput | ArticuloSolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticuloSolicitud createManyAndReturn
   */
  export type ArticuloSolicitudCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * The data used to create many ArticuloSolicituds.
     */
    data: ArticuloSolicitudCreateManyInput | ArticuloSolicitudCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloSolicitud update
   */
  export type ArticuloSolicitudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticuloSolicitud.
     */
    data: XOR<ArticuloSolicitudUpdateInput, ArticuloSolicitudUncheckedUpdateInput>
    /**
     * Choose, which ArticuloSolicitud to update.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud updateMany
   */
  export type ArticuloSolicitudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticuloSolicituds.
     */
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloSolicituds to update
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * Limit how many ArticuloSolicituds to update.
     */
    limit?: number
  }

  /**
   * ArticuloSolicitud updateManyAndReturn
   */
  export type ArticuloSolicitudUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * The data used to update ArticuloSolicituds.
     */
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloSolicituds to update
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * Limit how many ArticuloSolicituds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloSolicitud upsert
   */
  export type ArticuloSolicitudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticuloSolicitud to update in case it exists.
     */
    where: ArticuloSolicitudWhereUniqueInput
    /**
     * In case the ArticuloSolicitud found by the `where` argument doesn't exist, create a new ArticuloSolicitud with this data.
     */
    create: XOR<ArticuloSolicitudCreateInput, ArticuloSolicitudUncheckedCreateInput>
    /**
     * In case the ArticuloSolicitud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloSolicitudUpdateInput, ArticuloSolicitudUncheckedUpdateInput>
  }

  /**
   * ArticuloSolicitud delete
   */
  export type ArticuloSolicitudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
    /**
     * Filter which ArticuloSolicitud to delete.
     */
    where: ArticuloSolicitudWhereUniqueInput
  }

  /**
   * ArticuloSolicitud deleteMany
   */
  export type ArticuloSolicitudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloSolicituds to delete
     */
    where?: ArticuloSolicitudWhereInput
    /**
     * Limit how many ArticuloSolicituds to delete.
     */
    limit?: number
  }

  /**
   * ArticuloSolicitud without action
   */
  export type ArticuloSolicitudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitud
     */
    select?: ArticuloSolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitud
     */
    omit?: ArticuloSolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitudInclude<ExtArgs> | null
  }


  /**
   * Model PeticionDonacion
   */

  export type AggregatePeticionDonacion = {
    _count: PeticionDonacionCountAggregateOutputType | null
    _avg: PeticionDonacionAvgAggregateOutputType | null
    _sum: PeticionDonacionSumAggregateOutputType | null
    _min: PeticionDonacionMinAggregateOutputType | null
    _max: PeticionDonacionMaxAggregateOutputType | null
  }

  export type PeticionDonacionAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PeticionDonacionSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type PeticionDonacionMinAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PeticionDonacionMaxAggregateOutputType = {
    id: number | null
    direccion: string | null
    contactoNombre: string | null
    contactoTel: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PeticionDonacionCountAggregateOutputType = {
    id: number
    direccion: number
    contactoNombre: number
    contactoTel: number
    latitud: number
    longitud: number
    descripcion: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type PeticionDonacionAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type PeticionDonacionSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type PeticionDonacionMinAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PeticionDonacionMaxAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PeticionDonacionCountAggregateInputType = {
    id?: true
    direccion?: true
    contactoNombre?: true
    contactoTel?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type PeticionDonacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeticionDonacion to aggregate.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeticionDonacions
    **/
    _count?: true | PeticionDonacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeticionDonacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeticionDonacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeticionDonacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeticionDonacionMaxAggregateInputType
  }

  export type GetPeticionDonacionAggregateType<T extends PeticionDonacionAggregateArgs> = {
        [P in keyof T & keyof AggregatePeticionDonacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeticionDonacion[P]>
      : GetScalarType<T[P], AggregatePeticionDonacion[P]>
  }




  export type PeticionDonacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeticionDonacionWhereInput
    orderBy?: PeticionDonacionOrderByWithAggregationInput | PeticionDonacionOrderByWithAggregationInput[]
    by: PeticionDonacionScalarFieldEnum[] | PeticionDonacionScalarFieldEnum
    having?: PeticionDonacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeticionDonacionCountAggregateInputType | true
    _avg?: PeticionDonacionAvgAggregateInputType
    _sum?: PeticionDonacionSumAggregateInputType
    _min?: PeticionDonacionMinAggregateInputType
    _max?: PeticionDonacionMaxAggregateInputType
  }

  export type PeticionDonacionGroupByOutputType = {
    id: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string
    creadoEn: Date
    actualizadoEn: Date
    _count: PeticionDonacionCountAggregateOutputType | null
    _avg: PeticionDonacionAvgAggregateOutputType | null
    _sum: PeticionDonacionSumAggregateOutputType | null
    _min: PeticionDonacionMinAggregateOutputType | null
    _max: PeticionDonacionMaxAggregateOutputType | null
  }

  type GetPeticionDonacionGroupByPayload<T extends PeticionDonacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeticionDonacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeticionDonacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeticionDonacionGroupByOutputType[P]>
            : GetScalarType<T[P], PeticionDonacionGroupByOutputType[P]>
        }
      >
    >


  export type PeticionDonacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    articulos?: boolean | PeticionDonacion$articulosArgs<ExtArgs>
    _count?: boolean | PeticionDonacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peticionDonacion"]>

  export type PeticionDonacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["peticionDonacion"]>

  export type PeticionDonacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["peticionDonacion"]>

  export type PeticionDonacionSelectScalar = {
    id?: boolean
    direccion?: boolean
    contactoNombre?: boolean
    contactoTel?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type PeticionDonacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "direccion" | "contactoNombre" | "contactoTel" | "latitud" | "longitud" | "descripcion" | "estado" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["peticionDonacion"]>
  export type PeticionDonacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulos?: boolean | PeticionDonacion$articulosArgs<ExtArgs>
    _count?: boolean | PeticionDonacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeticionDonacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeticionDonacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeticionDonacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeticionDonacion"
    objects: {
      articulos: Prisma.$ArticuloPeticionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      direccion: string
      contactoNombre: string
      contactoTel: string
      latitud: number | null
      longitud: number | null
      descripcion: string | null
      estado: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["peticionDonacion"]>
    composites: {}
  }

  type PeticionDonacionGetPayload<S extends boolean | null | undefined | PeticionDonacionDefaultArgs> = $Result.GetResult<Prisma.$PeticionDonacionPayload, S>

  type PeticionDonacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeticionDonacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeticionDonacionCountAggregateInputType | true
    }

  export interface PeticionDonacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeticionDonacion'], meta: { name: 'PeticionDonacion' } }
    /**
     * Find zero or one PeticionDonacion that matches the filter.
     * @param {PeticionDonacionFindUniqueArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeticionDonacionFindUniqueArgs>(args: SelectSubset<T, PeticionDonacionFindUniqueArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeticionDonacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeticionDonacionFindUniqueOrThrowArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeticionDonacionFindUniqueOrThrowArgs>(args: SelectSubset<T, PeticionDonacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeticionDonacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionFindFirstArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeticionDonacionFindFirstArgs>(args?: SelectSubset<T, PeticionDonacionFindFirstArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeticionDonacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionFindFirstOrThrowArgs} args - Arguments to find a PeticionDonacion
     * @example
     * // Get one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeticionDonacionFindFirstOrThrowArgs>(args?: SelectSubset<T, PeticionDonacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeticionDonacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeticionDonacions
     * const peticionDonacions = await prisma.peticionDonacion.findMany()
     * 
     * // Get first 10 PeticionDonacions
     * const peticionDonacions = await prisma.peticionDonacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peticionDonacionWithIdOnly = await prisma.peticionDonacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeticionDonacionFindManyArgs>(args?: SelectSubset<T, PeticionDonacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeticionDonacion.
     * @param {PeticionDonacionCreateArgs} args - Arguments to create a PeticionDonacion.
     * @example
     * // Create one PeticionDonacion
     * const PeticionDonacion = await prisma.peticionDonacion.create({
     *   data: {
     *     // ... data to create a PeticionDonacion
     *   }
     * })
     * 
     */
    create<T extends PeticionDonacionCreateArgs>(args: SelectSubset<T, PeticionDonacionCreateArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeticionDonacions.
     * @param {PeticionDonacionCreateManyArgs} args - Arguments to create many PeticionDonacions.
     * @example
     * // Create many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeticionDonacionCreateManyArgs>(args?: SelectSubset<T, PeticionDonacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeticionDonacions and returns the data saved in the database.
     * @param {PeticionDonacionCreateManyAndReturnArgs} args - Arguments to create many PeticionDonacions.
     * @example
     * // Create many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeticionDonacions and only return the `id`
     * const peticionDonacionWithIdOnly = await prisma.peticionDonacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeticionDonacionCreateManyAndReturnArgs>(args?: SelectSubset<T, PeticionDonacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeticionDonacion.
     * @param {PeticionDonacionDeleteArgs} args - Arguments to delete one PeticionDonacion.
     * @example
     * // Delete one PeticionDonacion
     * const PeticionDonacion = await prisma.peticionDonacion.delete({
     *   where: {
     *     // ... filter to delete one PeticionDonacion
     *   }
     * })
     * 
     */
    delete<T extends PeticionDonacionDeleteArgs>(args: SelectSubset<T, PeticionDonacionDeleteArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeticionDonacion.
     * @param {PeticionDonacionUpdateArgs} args - Arguments to update one PeticionDonacion.
     * @example
     * // Update one PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeticionDonacionUpdateArgs>(args: SelectSubset<T, PeticionDonacionUpdateArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeticionDonacions.
     * @param {PeticionDonacionDeleteManyArgs} args - Arguments to filter PeticionDonacions to delete.
     * @example
     * // Delete a few PeticionDonacions
     * const { count } = await prisma.peticionDonacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeticionDonacionDeleteManyArgs>(args?: SelectSubset<T, PeticionDonacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeticionDonacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeticionDonacionUpdateManyArgs>(args: SelectSubset<T, PeticionDonacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeticionDonacions and returns the data updated in the database.
     * @param {PeticionDonacionUpdateManyAndReturnArgs} args - Arguments to update many PeticionDonacions.
     * @example
     * // Update many PeticionDonacions
     * const peticionDonacion = await prisma.peticionDonacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeticionDonacions and only return the `id`
     * const peticionDonacionWithIdOnly = await prisma.peticionDonacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeticionDonacionUpdateManyAndReturnArgs>(args: SelectSubset<T, PeticionDonacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeticionDonacion.
     * @param {PeticionDonacionUpsertArgs} args - Arguments to update or create a PeticionDonacion.
     * @example
     * // Update or create a PeticionDonacion
     * const peticionDonacion = await prisma.peticionDonacion.upsert({
     *   create: {
     *     // ... data to create a PeticionDonacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeticionDonacion we want to update
     *   }
     * })
     */
    upsert<T extends PeticionDonacionUpsertArgs>(args: SelectSubset<T, PeticionDonacionUpsertArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeticionDonacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionCountArgs} args - Arguments to filter PeticionDonacions to count.
     * @example
     * // Count the number of PeticionDonacions
     * const count = await prisma.peticionDonacion.count({
     *   where: {
     *     // ... the filter for the PeticionDonacions we want to count
     *   }
     * })
    **/
    count<T extends PeticionDonacionCountArgs>(
      args?: Subset<T, PeticionDonacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeticionDonacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeticionDonacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeticionDonacionAggregateArgs>(args: Subset<T, PeticionDonacionAggregateArgs>): Prisma.PrismaPromise<GetPeticionDonacionAggregateType<T>>

    /**
     * Group by PeticionDonacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeticionDonacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeticionDonacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeticionDonacionGroupByArgs['orderBy'] }
        : { orderBy?: PeticionDonacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeticionDonacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeticionDonacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeticionDonacion model
   */
  readonly fields: PeticionDonacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeticionDonacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeticionDonacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulos<T extends PeticionDonacion$articulosArgs<ExtArgs> = {}>(args?: Subset<T, PeticionDonacion$articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeticionDonacion model
   */ 
  interface PeticionDonacionFieldRefs {
    readonly id: FieldRef<"PeticionDonacion", 'Int'>
    readonly direccion: FieldRef<"PeticionDonacion", 'String'>
    readonly contactoNombre: FieldRef<"PeticionDonacion", 'String'>
    readonly contactoTel: FieldRef<"PeticionDonacion", 'String'>
    readonly latitud: FieldRef<"PeticionDonacion", 'Float'>
    readonly longitud: FieldRef<"PeticionDonacion", 'Float'>
    readonly descripcion: FieldRef<"PeticionDonacion", 'String'>
    readonly estado: FieldRef<"PeticionDonacion", 'String'>
    readonly creadoEn: FieldRef<"PeticionDonacion", 'DateTime'>
    readonly actualizadoEn: FieldRef<"PeticionDonacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeticionDonacion findUnique
   */
  export type PeticionDonacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion findUniqueOrThrow
   */
  export type PeticionDonacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion findFirst
   */
  export type PeticionDonacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeticionDonacions.
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeticionDonacions.
     */
    distinct?: PeticionDonacionScalarFieldEnum | PeticionDonacionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion findFirstOrThrow
   */
  export type PeticionDonacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacion to fetch.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeticionDonacions.
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeticionDonacions.
     */
    distinct?: PeticionDonacionScalarFieldEnum | PeticionDonacionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion findMany
   */
  export type PeticionDonacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter, which PeticionDonacions to fetch.
     */
    where?: PeticionDonacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeticionDonacions to fetch.
     */
    orderBy?: PeticionDonacionOrderByWithRelationInput | PeticionDonacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeticionDonacions.
     */
    cursor?: PeticionDonacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeticionDonacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeticionDonacions.
     */
    skip?: number
    distinct?: PeticionDonacionScalarFieldEnum | PeticionDonacionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion create
   */
  export type PeticionDonacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * The data needed to create a PeticionDonacion.
     */
    data: XOR<PeticionDonacionCreateInput, PeticionDonacionUncheckedCreateInput>
  }

  /**
   * PeticionDonacion createMany
   */
  export type PeticionDonacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeticionDonacions.
     */
    data: PeticionDonacionCreateManyInput | PeticionDonacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeticionDonacion createManyAndReturn
   */
  export type PeticionDonacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * The data used to create many PeticionDonacions.
     */
    data: PeticionDonacionCreateManyInput | PeticionDonacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeticionDonacion update
   */
  export type PeticionDonacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * The data needed to update a PeticionDonacion.
     */
    data: XOR<PeticionDonacionUpdateInput, PeticionDonacionUncheckedUpdateInput>
    /**
     * Choose, which PeticionDonacion to update.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion updateMany
   */
  export type PeticionDonacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeticionDonacions.
     */
    data: XOR<PeticionDonacionUpdateManyMutationInput, PeticionDonacionUncheckedUpdateManyInput>
    /**
     * Filter which PeticionDonacions to update
     */
    where?: PeticionDonacionWhereInput
    /**
     * Limit how many PeticionDonacions to update.
     */
    limit?: number
  }

  /**
   * PeticionDonacion updateManyAndReturn
   */
  export type PeticionDonacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * The data used to update PeticionDonacions.
     */
    data: XOR<PeticionDonacionUpdateManyMutationInput, PeticionDonacionUncheckedUpdateManyInput>
    /**
     * Filter which PeticionDonacions to update
     */
    where?: PeticionDonacionWhereInput
    /**
     * Limit how many PeticionDonacions to update.
     */
    limit?: number
  }

  /**
   * PeticionDonacion upsert
   */
  export type PeticionDonacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * The filter to search for the PeticionDonacion to update in case it exists.
     */
    where: PeticionDonacionWhereUniqueInput
    /**
     * In case the PeticionDonacion found by the `where` argument doesn't exist, create a new PeticionDonacion with this data.
     */
    create: XOR<PeticionDonacionCreateInput, PeticionDonacionUncheckedCreateInput>
    /**
     * In case the PeticionDonacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeticionDonacionUpdateInput, PeticionDonacionUncheckedUpdateInput>
  }

  /**
   * PeticionDonacion delete
   */
  export type PeticionDonacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
    /**
     * Filter which PeticionDonacion to delete.
     */
    where: PeticionDonacionWhereUniqueInput
  }

  /**
   * PeticionDonacion deleteMany
   */
  export type PeticionDonacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeticionDonacions to delete
     */
    where?: PeticionDonacionWhereInput
    /**
     * Limit how many PeticionDonacions to delete.
     */
    limit?: number
  }

  /**
   * PeticionDonacion.articulos
   */
  export type PeticionDonacion$articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    where?: ArticuloPeticionWhereInput
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    cursor?: ArticuloPeticionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * PeticionDonacion without action
   */
  export type PeticionDonacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeticionDonacion
     */
    select?: PeticionDonacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeticionDonacion
     */
    omit?: PeticionDonacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeticionDonacionInclude<ExtArgs> | null
  }


  /**
   * Model ArticuloPeticion
   */

  export type AggregateArticuloPeticion = {
    _count: ArticuloPeticionCountAggregateOutputType | null
    _avg: ArticuloPeticionAvgAggregateOutputType | null
    _sum: ArticuloPeticionSumAggregateOutputType | null
    _min: ArticuloPeticionMinAggregateOutputType | null
    _max: ArticuloPeticionMaxAggregateOutputType | null
  }

  export type ArticuloPeticionAvgAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloPeticionSumAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloPeticionMinAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloPeticionMaxAggregateOutputType = {
    id: number | null
    peticionDonacionId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
    creadoEn: Date | null
  }

  export type ArticuloPeticionCountAggregateOutputType = {
    id: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn: number
    _all: number
  }


  export type ArticuloPeticionAvgAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloPeticionSumAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloPeticionMinAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloPeticionMaxAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
  }

  export type ArticuloPeticionCountAggregateInputType = {
    id?: true
    peticionDonacionId?: true
    tipoArticuloId?: true
    cantidad?: true
    creadoEn?: true
    _all?: true
  }

  export type ArticuloPeticionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloPeticion to aggregate.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticuloPeticions
    **/
    _count?: true | ArticuloPeticionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloPeticionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloPeticionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloPeticionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloPeticionMaxAggregateInputType
  }

  export type GetArticuloPeticionAggregateType<T extends ArticuloPeticionAggregateArgs> = {
        [P in keyof T & keyof AggregateArticuloPeticion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticuloPeticion[P]>
      : GetScalarType<T[P], AggregateArticuloPeticion[P]>
  }




  export type ArticuloPeticionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloPeticionWhereInput
    orderBy?: ArticuloPeticionOrderByWithAggregationInput | ArticuloPeticionOrderByWithAggregationInput[]
    by: ArticuloPeticionScalarFieldEnum[] | ArticuloPeticionScalarFieldEnum
    having?: ArticuloPeticionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloPeticionCountAggregateInputType | true
    _avg?: ArticuloPeticionAvgAggregateInputType
    _sum?: ArticuloPeticionSumAggregateInputType
    _min?: ArticuloPeticionMinAggregateInputType
    _max?: ArticuloPeticionMaxAggregateInputType
  }

  export type ArticuloPeticionGroupByOutputType = {
    id: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn: Date
    _count: ArticuloPeticionCountAggregateOutputType | null
    _avg: ArticuloPeticionAvgAggregateOutputType | null
    _sum: ArticuloPeticionSumAggregateOutputType | null
    _min: ArticuloPeticionMinAggregateOutputType | null
    _max: ArticuloPeticionMaxAggregateOutputType | null
  }

  type GetArticuloPeticionGroupByPayload<T extends ArticuloPeticionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloPeticionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloPeticionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloPeticionGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloPeticionGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloPeticionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloPeticion"]>

  export type ArticuloPeticionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloPeticion"]>

  export type ArticuloPeticionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloPeticion"]>

  export type ArticuloPeticionSelectScalar = {
    id?: boolean
    peticionDonacionId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    creadoEn?: boolean
  }

  export type ArticuloPeticionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peticionDonacionId" | "tipoArticuloId" | "cantidad" | "creadoEn", ExtArgs["result"]["articuloPeticion"]>
  export type ArticuloPeticionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloPeticionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloPeticionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peticionDonacion?: boolean | PeticionDonacionDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }

  export type $ArticuloPeticionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticuloPeticion"
    objects: {
      peticionDonacion: Prisma.$PeticionDonacionPayload<ExtArgs>
      tipoArticulo: Prisma.$TipoArticuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      peticionDonacionId: number
      tipoArticuloId: number
      cantidad: number
      creadoEn: Date
    }, ExtArgs["result"]["articuloPeticion"]>
    composites: {}
  }

  type ArticuloPeticionGetPayload<S extends boolean | null | undefined | ArticuloPeticionDefaultArgs> = $Result.GetResult<Prisma.$ArticuloPeticionPayload, S>

  type ArticuloPeticionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloPeticionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloPeticionCountAggregateInputType | true
    }

  export interface ArticuloPeticionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticuloPeticion'], meta: { name: 'ArticuloPeticion' } }
    /**
     * Find zero or one ArticuloPeticion that matches the filter.
     * @param {ArticuloPeticionFindUniqueArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloPeticionFindUniqueArgs>(args: SelectSubset<T, ArticuloPeticionFindUniqueArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticuloPeticion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloPeticionFindUniqueOrThrowArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloPeticionFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloPeticionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloPeticion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionFindFirstArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloPeticionFindFirstArgs>(args?: SelectSubset<T, ArticuloPeticionFindFirstArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloPeticion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionFindFirstOrThrowArgs} args - Arguments to find a ArticuloPeticion
     * @example
     * // Get one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloPeticionFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloPeticionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticuloPeticions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticuloPeticions
     * const articuloPeticions = await prisma.articuloPeticion.findMany()
     * 
     * // Get first 10 ArticuloPeticions
     * const articuloPeticions = await prisma.articuloPeticion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloPeticionWithIdOnly = await prisma.articuloPeticion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloPeticionFindManyArgs>(args?: SelectSubset<T, ArticuloPeticionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticuloPeticion.
     * @param {ArticuloPeticionCreateArgs} args - Arguments to create a ArticuloPeticion.
     * @example
     * // Create one ArticuloPeticion
     * const ArticuloPeticion = await prisma.articuloPeticion.create({
     *   data: {
     *     // ... data to create a ArticuloPeticion
     *   }
     * })
     * 
     */
    create<T extends ArticuloPeticionCreateArgs>(args: SelectSubset<T, ArticuloPeticionCreateArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticuloPeticions.
     * @param {ArticuloPeticionCreateManyArgs} args - Arguments to create many ArticuloPeticions.
     * @example
     * // Create many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloPeticionCreateManyArgs>(args?: SelectSubset<T, ArticuloPeticionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticuloPeticions and returns the data saved in the database.
     * @param {ArticuloPeticionCreateManyAndReturnArgs} args - Arguments to create many ArticuloPeticions.
     * @example
     * // Create many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticuloPeticions and only return the `id`
     * const articuloPeticionWithIdOnly = await prisma.articuloPeticion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloPeticionCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloPeticionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticuloPeticion.
     * @param {ArticuloPeticionDeleteArgs} args - Arguments to delete one ArticuloPeticion.
     * @example
     * // Delete one ArticuloPeticion
     * const ArticuloPeticion = await prisma.articuloPeticion.delete({
     *   where: {
     *     // ... filter to delete one ArticuloPeticion
     *   }
     * })
     * 
     */
    delete<T extends ArticuloPeticionDeleteArgs>(args: SelectSubset<T, ArticuloPeticionDeleteArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticuloPeticion.
     * @param {ArticuloPeticionUpdateArgs} args - Arguments to update one ArticuloPeticion.
     * @example
     * // Update one ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloPeticionUpdateArgs>(args: SelectSubset<T, ArticuloPeticionUpdateArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticuloPeticions.
     * @param {ArticuloPeticionDeleteManyArgs} args - Arguments to filter ArticuloPeticions to delete.
     * @example
     * // Delete a few ArticuloPeticions
     * const { count } = await prisma.articuloPeticion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloPeticionDeleteManyArgs>(args?: SelectSubset<T, ArticuloPeticionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloPeticions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloPeticionUpdateManyArgs>(args: SelectSubset<T, ArticuloPeticionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloPeticions and returns the data updated in the database.
     * @param {ArticuloPeticionUpdateManyAndReturnArgs} args - Arguments to update many ArticuloPeticions.
     * @example
     * // Update many ArticuloPeticions
     * const articuloPeticion = await prisma.articuloPeticion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticuloPeticions and only return the `id`
     * const articuloPeticionWithIdOnly = await prisma.articuloPeticion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticuloPeticionUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloPeticionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticuloPeticion.
     * @param {ArticuloPeticionUpsertArgs} args - Arguments to update or create a ArticuloPeticion.
     * @example
     * // Update or create a ArticuloPeticion
     * const articuloPeticion = await prisma.articuloPeticion.upsert({
     *   create: {
     *     // ... data to create a ArticuloPeticion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticuloPeticion we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloPeticionUpsertArgs>(args: SelectSubset<T, ArticuloPeticionUpsertArgs<ExtArgs>>): Prisma__ArticuloPeticionClient<$Result.GetResult<Prisma.$ArticuloPeticionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticuloPeticions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionCountArgs} args - Arguments to filter ArticuloPeticions to count.
     * @example
     * // Count the number of ArticuloPeticions
     * const count = await prisma.articuloPeticion.count({
     *   where: {
     *     // ... the filter for the ArticuloPeticions we want to count
     *   }
     * })
    **/
    count<T extends ArticuloPeticionCountArgs>(
      args?: Subset<T, ArticuloPeticionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloPeticionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticuloPeticion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloPeticionAggregateArgs>(args: Subset<T, ArticuloPeticionAggregateArgs>): Prisma.PrismaPromise<GetArticuloPeticionAggregateType<T>>

    /**
     * Group by ArticuloPeticion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloPeticionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticuloPeticionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloPeticionGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloPeticionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticuloPeticionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloPeticionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticuloPeticion model
   */
  readonly fields: ArticuloPeticionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticuloPeticion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloPeticionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peticionDonacion<T extends PeticionDonacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeticionDonacionDefaultArgs<ExtArgs>>): Prisma__PeticionDonacionClient<$Result.GetResult<Prisma.$PeticionDonacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoArticulo<T extends TipoArticuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticuloDefaultArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticuloPeticion model
   */ 
  interface ArticuloPeticionFieldRefs {
    readonly id: FieldRef<"ArticuloPeticion", 'Int'>
    readonly peticionDonacionId: FieldRef<"ArticuloPeticion", 'Int'>
    readonly tipoArticuloId: FieldRef<"ArticuloPeticion", 'Int'>
    readonly cantidad: FieldRef<"ArticuloPeticion", 'Int'>
    readonly creadoEn: FieldRef<"ArticuloPeticion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticuloPeticion findUnique
   */
  export type ArticuloPeticionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion findUniqueOrThrow
   */
  export type ArticuloPeticionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion findFirst
   */
  export type ArticuloPeticionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloPeticions.
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloPeticions.
     */
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * ArticuloPeticion findFirstOrThrow
   */
  export type ArticuloPeticionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticion to fetch.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloPeticions.
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloPeticions.
     */
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * ArticuloPeticion findMany
   */
  export type ArticuloPeticionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloPeticions to fetch.
     */
    where?: ArticuloPeticionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloPeticions to fetch.
     */
    orderBy?: ArticuloPeticionOrderByWithRelationInput | ArticuloPeticionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticuloPeticions.
     */
    cursor?: ArticuloPeticionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloPeticions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloPeticions.
     */
    skip?: number
    distinct?: ArticuloPeticionScalarFieldEnum | ArticuloPeticionScalarFieldEnum[]
  }

  /**
   * ArticuloPeticion create
   */
  export type ArticuloPeticionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticuloPeticion.
     */
    data: XOR<ArticuloPeticionCreateInput, ArticuloPeticionUncheckedCreateInput>
  }

  /**
   * ArticuloPeticion createMany
   */
  export type ArticuloPeticionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticuloPeticions.
     */
    data: ArticuloPeticionCreateManyInput | ArticuloPeticionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticuloPeticion createManyAndReturn
   */
  export type ArticuloPeticionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * The data used to create many ArticuloPeticions.
     */
    data: ArticuloPeticionCreateManyInput | ArticuloPeticionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloPeticion update
   */
  export type ArticuloPeticionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticuloPeticion.
     */
    data: XOR<ArticuloPeticionUpdateInput, ArticuloPeticionUncheckedUpdateInput>
    /**
     * Choose, which ArticuloPeticion to update.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion updateMany
   */
  export type ArticuloPeticionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticuloPeticions.
     */
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloPeticions to update
     */
    where?: ArticuloPeticionWhereInput
    /**
     * Limit how many ArticuloPeticions to update.
     */
    limit?: number
  }

  /**
   * ArticuloPeticion updateManyAndReturn
   */
  export type ArticuloPeticionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * The data used to update ArticuloPeticions.
     */
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloPeticions to update
     */
    where?: ArticuloPeticionWhereInput
    /**
     * Limit how many ArticuloPeticions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloPeticion upsert
   */
  export type ArticuloPeticionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticuloPeticion to update in case it exists.
     */
    where: ArticuloPeticionWhereUniqueInput
    /**
     * In case the ArticuloPeticion found by the `where` argument doesn't exist, create a new ArticuloPeticion with this data.
     */
    create: XOR<ArticuloPeticionCreateInput, ArticuloPeticionUncheckedCreateInput>
    /**
     * In case the ArticuloPeticion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloPeticionUpdateInput, ArticuloPeticionUncheckedUpdateInput>
  }

  /**
   * ArticuloPeticion delete
   */
  export type ArticuloPeticionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
    /**
     * Filter which ArticuloPeticion to delete.
     */
    where: ArticuloPeticionWhereUniqueInput
  }

  /**
   * ArticuloPeticion deleteMany
   */
  export type ArticuloPeticionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloPeticions to delete
     */
    where?: ArticuloPeticionWhereInput
    /**
     * Limit how many ArticuloPeticions to delete.
     */
    limit?: number
  }

  /**
   * ArticuloPeticion without action
   */
  export type ArticuloPeticionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloPeticion
     */
    select?: ArticuloPeticionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloPeticion
     */
    omit?: ArticuloPeticionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloPeticionInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type AdministradorCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nombre: number
    creadoEn: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id?: true
  }

  export type AdministradorSumAggregateInputType = {
    id?: true
  }

  export type AdministradorMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    creadoEn?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    creadoEn?: true
  }

  export type AdministradorCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    creadoEn?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id: number
    email: string
    password: string
    nombre: string | null
    creadoEn: Date
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nombre" | "creadoEn", ExtArgs["result"]["administrador"]>

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nombre: string | null
      creadoEn: Date
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradorWithIdOnly = await prisma.administrador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors and returns the data updated in the database.
     * @param {AdministradorUpdateManyAndReturnArgs} args - Arguments to update many Administradors.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdministradorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrador model
   */ 
  interface AdministradorFieldRefs {
    readonly id: FieldRef<"Administrador", 'Int'>
    readonly email: FieldRef<"Administrador", 'String'>
    readonly password: FieldRef<"Administrador", 'String'>
    readonly nombre: FieldRef<"Administrador", 'String'>
    readonly creadoEn: FieldRef<"Administrador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador updateManyAndReturn
   */
  export type AdministradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
  }


  /**
   * Model SolicitudCentro
   */

  export type AggregateSolicitudCentro = {
    _count: SolicitudCentroCountAggregateOutputType | null
    _avg: SolicitudCentroAvgAggregateOutputType | null
    _sum: SolicitudCentroSumAggregateOutputType | null
    _min: SolicitudCentroMinAggregateOutputType | null
    _max: SolicitudCentroMaxAggregateOutputType | null
  }

  export type SolicitudCentroAvgAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudCentroSumAggregateOutputType = {
    id: number | null
    latitud: number | null
    longitud: number | null
  }

  export type SolicitudCentroMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    responsable: string | null
    telefono: string | null
    horarioApertura: string | null
    horarioCierre: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolicitudCentroMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    responsable: string | null
    telefono: string | null
    horarioApertura: string | null
    horarioCierre: string | null
    latitud: number | null
    longitud: number | null
    descripcion: string | null
    estado: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolicitudCentroCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    responsable: number
    telefono: number
    horarioApertura: number
    horarioCierre: number
    latitud: number
    longitud: number
    descripcion: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolicitudCentroAvgAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudCentroSumAggregateInputType = {
    id?: true
    latitud?: true
    longitud?: true
  }

  export type SolicitudCentroMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    horarioApertura?: true
    horarioCierre?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolicitudCentroMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    horarioApertura?: true
    horarioCierre?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolicitudCentroCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    responsable?: true
    telefono?: true
    horarioApertura?: true
    horarioCierre?: true
    latitud?: true
    longitud?: true
    descripcion?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolicitudCentroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitudCentro to aggregate.
     */
    where?: SolicitudCentroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudCentros to fetch.
     */
    orderBy?: SolicitudCentroOrderByWithRelationInput | SolicitudCentroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudCentroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudCentros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudCentros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolicitudCentros
    **/
    _count?: true | SolicitudCentroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitudCentroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitudCentroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudCentroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudCentroMaxAggregateInputType
  }

  export type GetSolicitudCentroAggregateType<T extends SolicitudCentroAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitudCentro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitudCentro[P]>
      : GetScalarType<T[P], AggregateSolicitudCentro[P]>
  }




  export type SolicitudCentroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudCentroWhereInput
    orderBy?: SolicitudCentroOrderByWithAggregationInput | SolicitudCentroOrderByWithAggregationInput[]
    by: SolicitudCentroScalarFieldEnum[] | SolicitudCentroScalarFieldEnum
    having?: SolicitudCentroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudCentroCountAggregateInputType | true
    _avg?: SolicitudCentroAvgAggregateInputType
    _sum?: SolicitudCentroSumAggregateInputType
    _min?: SolicitudCentroMinAggregateInputType
    _max?: SolicitudCentroMaxAggregateInputType
  }

  export type SolicitudCentroGroupByOutputType = {
    id: number
    nombre: string | null
    direccion: string
    responsable: string
    telefono: string | null
    horarioApertura: string | null
    horarioCierre: string | null
    latitud: number
    longitud: number
    descripcion: string | null
    estado: string
    createdAt: Date
    updatedAt: Date
    _count: SolicitudCentroCountAggregateOutputType | null
    _avg: SolicitudCentroAvgAggregateOutputType | null
    _sum: SolicitudCentroSumAggregateOutputType | null
    _min: SolicitudCentroMinAggregateOutputType | null
    _max: SolicitudCentroMaxAggregateOutputType | null
  }

  type GetSolicitudCentroGroupByPayload<T extends SolicitudCentroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudCentroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudCentroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudCentroGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudCentroGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudCentroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articulosSolicitados?: boolean | SolicitudCentro$articulosSolicitadosArgs<ExtArgs>
    _count?: boolean | SolicitudCentroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitudCentro"]>

  export type SolicitudCentroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solicitudCentro"]>

  export type SolicitudCentroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solicitudCentro"]>

  export type SolicitudCentroSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    responsable?: boolean
    telefono?: boolean
    horarioApertura?: boolean
    horarioCierre?: boolean
    latitud?: boolean
    longitud?: boolean
    descripcion?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolicitudCentroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "responsable" | "telefono" | "horarioApertura" | "horarioCierre" | "latitud" | "longitud" | "descripcion" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["solicitudCentro"]>
  export type SolicitudCentroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulosSolicitados?: boolean | SolicitudCentro$articulosSolicitadosArgs<ExtArgs>
    _count?: boolean | SolicitudCentroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SolicitudCentroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SolicitudCentroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SolicitudCentroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolicitudCentro"
    objects: {
      articulosSolicitados: Prisma.$ArticuloSolicitadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      direccion: string
      responsable: string
      telefono: string | null
      horarioApertura: string | null
      horarioCierre: string | null
      latitud: number
      longitud: number
      descripcion: string | null
      estado: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solicitudCentro"]>
    composites: {}
  }

  type SolicitudCentroGetPayload<S extends boolean | null | undefined | SolicitudCentroDefaultArgs> = $Result.GetResult<Prisma.$SolicitudCentroPayload, S>

  type SolicitudCentroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudCentroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudCentroCountAggregateInputType | true
    }

  export interface SolicitudCentroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolicitudCentro'], meta: { name: 'SolicitudCentro' } }
    /**
     * Find zero or one SolicitudCentro that matches the filter.
     * @param {SolicitudCentroFindUniqueArgs} args - Arguments to find a SolicitudCentro
     * @example
     * // Get one SolicitudCentro
     * const solicitudCentro = await prisma.solicitudCentro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudCentroFindUniqueArgs>(args: SelectSubset<T, SolicitudCentroFindUniqueArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolicitudCentro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudCentroFindUniqueOrThrowArgs} args - Arguments to find a SolicitudCentro
     * @example
     * // Get one SolicitudCentro
     * const solicitudCentro = await prisma.solicitudCentro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudCentroFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudCentroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitudCentro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCentroFindFirstArgs} args - Arguments to find a SolicitudCentro
     * @example
     * // Get one SolicitudCentro
     * const solicitudCentro = await prisma.solicitudCentro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudCentroFindFirstArgs>(args?: SelectSubset<T, SolicitudCentroFindFirstArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolicitudCentro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCentroFindFirstOrThrowArgs} args - Arguments to find a SolicitudCentro
     * @example
     * // Get one SolicitudCentro
     * const solicitudCentro = await prisma.solicitudCentro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudCentroFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudCentroFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolicitudCentros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCentroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolicitudCentros
     * const solicitudCentros = await prisma.solicitudCentro.findMany()
     * 
     * // Get first 10 SolicitudCentros
     * const solicitudCentros = await prisma.solicitudCentro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudCentroWithIdOnly = await prisma.solicitudCentro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudCentroFindManyArgs>(args?: SelectSubset<T, SolicitudCentroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolicitudCentro.
     * @param {SolicitudCentroCreateArgs} args - Arguments to create a SolicitudCentro.
     * @example
     * // Create one SolicitudCentro
     * const SolicitudCentro = await prisma.solicitudCentro.create({
     *   data: {
     *     // ... data to create a SolicitudCentro
     *   }
     * })
     * 
     */
    create<T extends SolicitudCentroCreateArgs>(args: SelectSubset<T, SolicitudCentroCreateArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolicitudCentros.
     * @param {SolicitudCentroCreateManyArgs} args - Arguments to create many SolicitudCentros.
     * @example
     * // Create many SolicitudCentros
     * const solicitudCentro = await prisma.solicitudCentro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudCentroCreateManyArgs>(args?: SelectSubset<T, SolicitudCentroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolicitudCentros and returns the data saved in the database.
     * @param {SolicitudCentroCreateManyAndReturnArgs} args - Arguments to create many SolicitudCentros.
     * @example
     * // Create many SolicitudCentros
     * const solicitudCentro = await prisma.solicitudCentro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolicitudCentros and only return the `id`
     * const solicitudCentroWithIdOnly = await prisma.solicitudCentro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudCentroCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudCentroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolicitudCentro.
     * @param {SolicitudCentroDeleteArgs} args - Arguments to delete one SolicitudCentro.
     * @example
     * // Delete one SolicitudCentro
     * const SolicitudCentro = await prisma.solicitudCentro.delete({
     *   where: {
     *     // ... filter to delete one SolicitudCentro
     *   }
     * })
     * 
     */
    delete<T extends SolicitudCentroDeleteArgs>(args: SelectSubset<T, SolicitudCentroDeleteArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolicitudCentro.
     * @param {SolicitudCentroUpdateArgs} args - Arguments to update one SolicitudCentro.
     * @example
     * // Update one SolicitudCentro
     * const solicitudCentro = await prisma.solicitudCentro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudCentroUpdateArgs>(args: SelectSubset<T, SolicitudCentroUpdateArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolicitudCentros.
     * @param {SolicitudCentroDeleteManyArgs} args - Arguments to filter SolicitudCentros to delete.
     * @example
     * // Delete a few SolicitudCentros
     * const { count } = await prisma.solicitudCentro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudCentroDeleteManyArgs>(args?: SelectSubset<T, SolicitudCentroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitudCentros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCentroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolicitudCentros
     * const solicitudCentro = await prisma.solicitudCentro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudCentroUpdateManyArgs>(args: SelectSubset<T, SolicitudCentroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolicitudCentros and returns the data updated in the database.
     * @param {SolicitudCentroUpdateManyAndReturnArgs} args - Arguments to update many SolicitudCentros.
     * @example
     * // Update many SolicitudCentros
     * const solicitudCentro = await prisma.solicitudCentro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolicitudCentros and only return the `id`
     * const solicitudCentroWithIdOnly = await prisma.solicitudCentro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolicitudCentroUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudCentroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolicitudCentro.
     * @param {SolicitudCentroUpsertArgs} args - Arguments to update or create a SolicitudCentro.
     * @example
     * // Update or create a SolicitudCentro
     * const solicitudCentro = await prisma.solicitudCentro.upsert({
     *   create: {
     *     // ... data to create a SolicitudCentro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolicitudCentro we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudCentroUpsertArgs>(args: SelectSubset<T, SolicitudCentroUpsertArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolicitudCentros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCentroCountArgs} args - Arguments to filter SolicitudCentros to count.
     * @example
     * // Count the number of SolicitudCentros
     * const count = await prisma.solicitudCentro.count({
     *   where: {
     *     // ... the filter for the SolicitudCentros we want to count
     *   }
     * })
    **/
    count<T extends SolicitudCentroCountArgs>(
      args?: Subset<T, SolicitudCentroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudCentroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolicitudCentro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCentroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolicitudCentroAggregateArgs>(args: Subset<T, SolicitudCentroAggregateArgs>): Prisma.PrismaPromise<GetSolicitudCentroAggregateType<T>>

    /**
     * Group by SolicitudCentro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCentroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolicitudCentroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudCentroGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudCentroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolicitudCentroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudCentroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolicitudCentro model
   */
  readonly fields: SolicitudCentroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolicitudCentro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudCentroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulosSolicitados<T extends SolicitudCentro$articulosSolicitadosArgs<ExtArgs> = {}>(args?: Subset<T, SolicitudCentro$articulosSolicitadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolicitudCentro model
   */ 
  interface SolicitudCentroFieldRefs {
    readonly id: FieldRef<"SolicitudCentro", 'Int'>
    readonly nombre: FieldRef<"SolicitudCentro", 'String'>
    readonly direccion: FieldRef<"SolicitudCentro", 'String'>
    readonly responsable: FieldRef<"SolicitudCentro", 'String'>
    readonly telefono: FieldRef<"SolicitudCentro", 'String'>
    readonly horarioApertura: FieldRef<"SolicitudCentro", 'String'>
    readonly horarioCierre: FieldRef<"SolicitudCentro", 'String'>
    readonly latitud: FieldRef<"SolicitudCentro", 'Float'>
    readonly longitud: FieldRef<"SolicitudCentro", 'Float'>
    readonly descripcion: FieldRef<"SolicitudCentro", 'String'>
    readonly estado: FieldRef<"SolicitudCentro", 'String'>
    readonly createdAt: FieldRef<"SolicitudCentro", 'DateTime'>
    readonly updatedAt: FieldRef<"SolicitudCentro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolicitudCentro findUnique
   */
  export type SolicitudCentroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * Filter, which SolicitudCentro to fetch.
     */
    where: SolicitudCentroWhereUniqueInput
  }

  /**
   * SolicitudCentro findUniqueOrThrow
   */
  export type SolicitudCentroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * Filter, which SolicitudCentro to fetch.
     */
    where: SolicitudCentroWhereUniqueInput
  }

  /**
   * SolicitudCentro findFirst
   */
  export type SolicitudCentroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * Filter, which SolicitudCentro to fetch.
     */
    where?: SolicitudCentroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudCentros to fetch.
     */
    orderBy?: SolicitudCentroOrderByWithRelationInput | SolicitudCentroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitudCentros.
     */
    cursor?: SolicitudCentroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudCentros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudCentros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitudCentros.
     */
    distinct?: SolicitudCentroScalarFieldEnum | SolicitudCentroScalarFieldEnum[]
  }

  /**
   * SolicitudCentro findFirstOrThrow
   */
  export type SolicitudCentroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * Filter, which SolicitudCentro to fetch.
     */
    where?: SolicitudCentroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudCentros to fetch.
     */
    orderBy?: SolicitudCentroOrderByWithRelationInput | SolicitudCentroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolicitudCentros.
     */
    cursor?: SolicitudCentroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudCentros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudCentros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolicitudCentros.
     */
    distinct?: SolicitudCentroScalarFieldEnum | SolicitudCentroScalarFieldEnum[]
  }

  /**
   * SolicitudCentro findMany
   */
  export type SolicitudCentroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * Filter, which SolicitudCentros to fetch.
     */
    where?: SolicitudCentroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolicitudCentros to fetch.
     */
    orderBy?: SolicitudCentroOrderByWithRelationInput | SolicitudCentroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolicitudCentros.
     */
    cursor?: SolicitudCentroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolicitudCentros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolicitudCentros.
     */
    skip?: number
    distinct?: SolicitudCentroScalarFieldEnum | SolicitudCentroScalarFieldEnum[]
  }

  /**
   * SolicitudCentro create
   */
  export type SolicitudCentroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * The data needed to create a SolicitudCentro.
     */
    data: XOR<SolicitudCentroCreateInput, SolicitudCentroUncheckedCreateInput>
  }

  /**
   * SolicitudCentro createMany
   */
  export type SolicitudCentroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolicitudCentros.
     */
    data: SolicitudCentroCreateManyInput | SolicitudCentroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolicitudCentro createManyAndReturn
   */
  export type SolicitudCentroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * The data used to create many SolicitudCentros.
     */
    data: SolicitudCentroCreateManyInput | SolicitudCentroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolicitudCentro update
   */
  export type SolicitudCentroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * The data needed to update a SolicitudCentro.
     */
    data: XOR<SolicitudCentroUpdateInput, SolicitudCentroUncheckedUpdateInput>
    /**
     * Choose, which SolicitudCentro to update.
     */
    where: SolicitudCentroWhereUniqueInput
  }

  /**
   * SolicitudCentro updateMany
   */
  export type SolicitudCentroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolicitudCentros.
     */
    data: XOR<SolicitudCentroUpdateManyMutationInput, SolicitudCentroUncheckedUpdateManyInput>
    /**
     * Filter which SolicitudCentros to update
     */
    where?: SolicitudCentroWhereInput
    /**
     * Limit how many SolicitudCentros to update.
     */
    limit?: number
  }

  /**
   * SolicitudCentro updateManyAndReturn
   */
  export type SolicitudCentroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * The data used to update SolicitudCentros.
     */
    data: XOR<SolicitudCentroUpdateManyMutationInput, SolicitudCentroUncheckedUpdateManyInput>
    /**
     * Filter which SolicitudCentros to update
     */
    where?: SolicitudCentroWhereInput
    /**
     * Limit how many SolicitudCentros to update.
     */
    limit?: number
  }

  /**
   * SolicitudCentro upsert
   */
  export type SolicitudCentroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * The filter to search for the SolicitudCentro to update in case it exists.
     */
    where: SolicitudCentroWhereUniqueInput
    /**
     * In case the SolicitudCentro found by the `where` argument doesn't exist, create a new SolicitudCentro with this data.
     */
    create: XOR<SolicitudCentroCreateInput, SolicitudCentroUncheckedCreateInput>
    /**
     * In case the SolicitudCentro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudCentroUpdateInput, SolicitudCentroUncheckedUpdateInput>
  }

  /**
   * SolicitudCentro delete
   */
  export type SolicitudCentroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
    /**
     * Filter which SolicitudCentro to delete.
     */
    where: SolicitudCentroWhereUniqueInput
  }

  /**
   * SolicitudCentro deleteMany
   */
  export type SolicitudCentroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolicitudCentros to delete
     */
    where?: SolicitudCentroWhereInput
    /**
     * Limit how many SolicitudCentros to delete.
     */
    limit?: number
  }

  /**
   * SolicitudCentro.articulosSolicitados
   */
  export type SolicitudCentro$articulosSolicitadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    where?: ArticuloSolicitadoWhereInput
    orderBy?: ArticuloSolicitadoOrderByWithRelationInput | ArticuloSolicitadoOrderByWithRelationInput[]
    cursor?: ArticuloSolicitadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticuloSolicitadoScalarFieldEnum | ArticuloSolicitadoScalarFieldEnum[]
  }

  /**
   * SolicitudCentro without action
   */
  export type SolicitudCentroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCentro
     */
    select?: SolicitudCentroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolicitudCentro
     */
    omit?: SolicitudCentroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudCentroInclude<ExtArgs> | null
  }


  /**
   * Model ArticuloSolicitado
   */

  export type AggregateArticuloSolicitado = {
    _count: ArticuloSolicitadoCountAggregateOutputType | null
    _avg: ArticuloSolicitadoAvgAggregateOutputType | null
    _sum: ArticuloSolicitadoSumAggregateOutputType | null
    _min: ArticuloSolicitadoMinAggregateOutputType | null
    _max: ArticuloSolicitadoMaxAggregateOutputType | null
  }

  export type ArticuloSolicitadoAvgAggregateOutputType = {
    id: number | null
    solicitudCentroId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitadoSumAggregateOutputType = {
    id: number | null
    solicitudCentroId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitadoMinAggregateOutputType = {
    id: number | null
    solicitudCentroId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitadoMaxAggregateOutputType = {
    id: number | null
    solicitudCentroId: number | null
    tipoArticuloId: number | null
    cantidad: number | null
  }

  export type ArticuloSolicitadoCountAggregateOutputType = {
    id: number
    solicitudCentroId: number
    tipoArticuloId: number
    cantidad: number
    _all: number
  }


  export type ArticuloSolicitadoAvgAggregateInputType = {
    id?: true
    solicitudCentroId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloSolicitadoSumAggregateInputType = {
    id?: true
    solicitudCentroId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloSolicitadoMinAggregateInputType = {
    id?: true
    solicitudCentroId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloSolicitadoMaxAggregateInputType = {
    id?: true
    solicitudCentroId?: true
    tipoArticuloId?: true
    cantidad?: true
  }

  export type ArticuloSolicitadoCountAggregateInputType = {
    id?: true
    solicitudCentroId?: true
    tipoArticuloId?: true
    cantidad?: true
    _all?: true
  }

  export type ArticuloSolicitadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloSolicitado to aggregate.
     */
    where?: ArticuloSolicitadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicitados to fetch.
     */
    orderBy?: ArticuloSolicitadoOrderByWithRelationInput | ArticuloSolicitadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticuloSolicitadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicitados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicitados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticuloSolicitados
    **/
    _count?: true | ArticuloSolicitadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloSolicitadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloSolicitadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloSolicitadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloSolicitadoMaxAggregateInputType
  }

  export type GetArticuloSolicitadoAggregateType<T extends ArticuloSolicitadoAggregateArgs> = {
        [P in keyof T & keyof AggregateArticuloSolicitado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticuloSolicitado[P]>
      : GetScalarType<T[P], AggregateArticuloSolicitado[P]>
  }




  export type ArticuloSolicitadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticuloSolicitadoWhereInput
    orderBy?: ArticuloSolicitadoOrderByWithAggregationInput | ArticuloSolicitadoOrderByWithAggregationInput[]
    by: ArticuloSolicitadoScalarFieldEnum[] | ArticuloSolicitadoScalarFieldEnum
    having?: ArticuloSolicitadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloSolicitadoCountAggregateInputType | true
    _avg?: ArticuloSolicitadoAvgAggregateInputType
    _sum?: ArticuloSolicitadoSumAggregateInputType
    _min?: ArticuloSolicitadoMinAggregateInputType
    _max?: ArticuloSolicitadoMaxAggregateInputType
  }

  export type ArticuloSolicitadoGroupByOutputType = {
    id: number
    solicitudCentroId: number
    tipoArticuloId: number
    cantidad: number
    _count: ArticuloSolicitadoCountAggregateOutputType | null
    _avg: ArticuloSolicitadoAvgAggregateOutputType | null
    _sum: ArticuloSolicitadoSumAggregateOutputType | null
    _min: ArticuloSolicitadoMinAggregateOutputType | null
    _max: ArticuloSolicitadoMaxAggregateOutputType | null
  }

  type GetArticuloSolicitadoGroupByPayload<T extends ArticuloSolicitadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloSolicitadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloSolicitadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloSolicitadoGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloSolicitadoGroupByOutputType[P]>
        }
      >
    >


  export type ArticuloSolicitadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudCentroId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    solicitudCentro?: boolean | SolicitudCentroDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitado"]>

  export type ArticuloSolicitadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudCentroId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    solicitudCentro?: boolean | SolicitudCentroDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitado"]>

  export type ArticuloSolicitadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solicitudCentroId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
    solicitudCentro?: boolean | SolicitudCentroDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articuloSolicitado"]>

  export type ArticuloSolicitadoSelectScalar = {
    id?: boolean
    solicitudCentroId?: boolean
    tipoArticuloId?: boolean
    cantidad?: boolean
  }

  export type ArticuloSolicitadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solicitudCentroId" | "tipoArticuloId" | "cantidad", ExtArgs["result"]["articuloSolicitado"]>
  export type ArticuloSolicitadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitudCentro?: boolean | SolicitudCentroDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloSolicitadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitudCentro?: boolean | SolicitudCentroDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }
  export type ArticuloSolicitadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solicitudCentro?: boolean | SolicitudCentroDefaultArgs<ExtArgs>
    tipoArticulo?: boolean | TipoArticuloDefaultArgs<ExtArgs>
  }

  export type $ArticuloSolicitadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticuloSolicitado"
    objects: {
      solicitudCentro: Prisma.$SolicitudCentroPayload<ExtArgs>
      tipoArticulo: Prisma.$TipoArticuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      solicitudCentroId: number
      tipoArticuloId: number
      cantidad: number
    }, ExtArgs["result"]["articuloSolicitado"]>
    composites: {}
  }

  type ArticuloSolicitadoGetPayload<S extends boolean | null | undefined | ArticuloSolicitadoDefaultArgs> = $Result.GetResult<Prisma.$ArticuloSolicitadoPayload, S>

  type ArticuloSolicitadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticuloSolicitadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloSolicitadoCountAggregateInputType | true
    }

  export interface ArticuloSolicitadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticuloSolicitado'], meta: { name: 'ArticuloSolicitado' } }
    /**
     * Find zero or one ArticuloSolicitado that matches the filter.
     * @param {ArticuloSolicitadoFindUniqueArgs} args - Arguments to find a ArticuloSolicitado
     * @example
     * // Get one ArticuloSolicitado
     * const articuloSolicitado = await prisma.articuloSolicitado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticuloSolicitadoFindUniqueArgs>(args: SelectSubset<T, ArticuloSolicitadoFindUniqueArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticuloSolicitado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticuloSolicitadoFindUniqueOrThrowArgs} args - Arguments to find a ArticuloSolicitado
     * @example
     * // Get one ArticuloSolicitado
     * const articuloSolicitado = await prisma.articuloSolicitado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticuloSolicitadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticuloSolicitadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloSolicitado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitadoFindFirstArgs} args - Arguments to find a ArticuloSolicitado
     * @example
     * // Get one ArticuloSolicitado
     * const articuloSolicitado = await prisma.articuloSolicitado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticuloSolicitadoFindFirstArgs>(args?: SelectSubset<T, ArticuloSolicitadoFindFirstArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticuloSolicitado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitadoFindFirstOrThrowArgs} args - Arguments to find a ArticuloSolicitado
     * @example
     * // Get one ArticuloSolicitado
     * const articuloSolicitado = await prisma.articuloSolicitado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticuloSolicitadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticuloSolicitadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticuloSolicitados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticuloSolicitados
     * const articuloSolicitados = await prisma.articuloSolicitado.findMany()
     * 
     * // Get first 10 ArticuloSolicitados
     * const articuloSolicitados = await prisma.articuloSolicitado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloSolicitadoWithIdOnly = await prisma.articuloSolicitado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticuloSolicitadoFindManyArgs>(args?: SelectSubset<T, ArticuloSolicitadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticuloSolicitado.
     * @param {ArticuloSolicitadoCreateArgs} args - Arguments to create a ArticuloSolicitado.
     * @example
     * // Create one ArticuloSolicitado
     * const ArticuloSolicitado = await prisma.articuloSolicitado.create({
     *   data: {
     *     // ... data to create a ArticuloSolicitado
     *   }
     * })
     * 
     */
    create<T extends ArticuloSolicitadoCreateArgs>(args: SelectSubset<T, ArticuloSolicitadoCreateArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticuloSolicitados.
     * @param {ArticuloSolicitadoCreateManyArgs} args - Arguments to create many ArticuloSolicitados.
     * @example
     * // Create many ArticuloSolicitados
     * const articuloSolicitado = await prisma.articuloSolicitado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticuloSolicitadoCreateManyArgs>(args?: SelectSubset<T, ArticuloSolicitadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticuloSolicitados and returns the data saved in the database.
     * @param {ArticuloSolicitadoCreateManyAndReturnArgs} args - Arguments to create many ArticuloSolicitados.
     * @example
     * // Create many ArticuloSolicitados
     * const articuloSolicitado = await prisma.articuloSolicitado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticuloSolicitados and only return the `id`
     * const articuloSolicitadoWithIdOnly = await prisma.articuloSolicitado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticuloSolicitadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticuloSolicitadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticuloSolicitado.
     * @param {ArticuloSolicitadoDeleteArgs} args - Arguments to delete one ArticuloSolicitado.
     * @example
     * // Delete one ArticuloSolicitado
     * const ArticuloSolicitado = await prisma.articuloSolicitado.delete({
     *   where: {
     *     // ... filter to delete one ArticuloSolicitado
     *   }
     * })
     * 
     */
    delete<T extends ArticuloSolicitadoDeleteArgs>(args: SelectSubset<T, ArticuloSolicitadoDeleteArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticuloSolicitado.
     * @param {ArticuloSolicitadoUpdateArgs} args - Arguments to update one ArticuloSolicitado.
     * @example
     * // Update one ArticuloSolicitado
     * const articuloSolicitado = await prisma.articuloSolicitado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticuloSolicitadoUpdateArgs>(args: SelectSubset<T, ArticuloSolicitadoUpdateArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticuloSolicitados.
     * @param {ArticuloSolicitadoDeleteManyArgs} args - Arguments to filter ArticuloSolicitados to delete.
     * @example
     * // Delete a few ArticuloSolicitados
     * const { count } = await prisma.articuloSolicitado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticuloSolicitadoDeleteManyArgs>(args?: SelectSubset<T, ArticuloSolicitadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloSolicitados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticuloSolicitados
     * const articuloSolicitado = await prisma.articuloSolicitado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticuloSolicitadoUpdateManyArgs>(args: SelectSubset<T, ArticuloSolicitadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticuloSolicitados and returns the data updated in the database.
     * @param {ArticuloSolicitadoUpdateManyAndReturnArgs} args - Arguments to update many ArticuloSolicitados.
     * @example
     * // Update many ArticuloSolicitados
     * const articuloSolicitado = await prisma.articuloSolicitado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticuloSolicitados and only return the `id`
     * const articuloSolicitadoWithIdOnly = await prisma.articuloSolicitado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticuloSolicitadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticuloSolicitadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticuloSolicitado.
     * @param {ArticuloSolicitadoUpsertArgs} args - Arguments to update or create a ArticuloSolicitado.
     * @example
     * // Update or create a ArticuloSolicitado
     * const articuloSolicitado = await prisma.articuloSolicitado.upsert({
     *   create: {
     *     // ... data to create a ArticuloSolicitado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticuloSolicitado we want to update
     *   }
     * })
     */
    upsert<T extends ArticuloSolicitadoUpsertArgs>(args: SelectSubset<T, ArticuloSolicitadoUpsertArgs<ExtArgs>>): Prisma__ArticuloSolicitadoClient<$Result.GetResult<Prisma.$ArticuloSolicitadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticuloSolicitados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitadoCountArgs} args - Arguments to filter ArticuloSolicitados to count.
     * @example
     * // Count the number of ArticuloSolicitados
     * const count = await prisma.articuloSolicitado.count({
     *   where: {
     *     // ... the filter for the ArticuloSolicitados we want to count
     *   }
     * })
    **/
    count<T extends ArticuloSolicitadoCountArgs>(
      args?: Subset<T, ArticuloSolicitadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloSolicitadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticuloSolicitado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloSolicitadoAggregateArgs>(args: Subset<T, ArticuloSolicitadoAggregateArgs>): Prisma.PrismaPromise<GetArticuloSolicitadoAggregateType<T>>

    /**
     * Group by ArticuloSolicitado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloSolicitadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticuloSolicitadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticuloSolicitadoGroupByArgs['orderBy'] }
        : { orderBy?: ArticuloSolicitadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticuloSolicitadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloSolicitadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticuloSolicitado model
   */
  readonly fields: ArticuloSolicitadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticuloSolicitado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticuloSolicitadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solicitudCentro<T extends SolicitudCentroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolicitudCentroDefaultArgs<ExtArgs>>): Prisma__SolicitudCentroClient<$Result.GetResult<Prisma.$SolicitudCentroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoArticulo<T extends TipoArticuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoArticuloDefaultArgs<ExtArgs>>): Prisma__TipoArticuloClient<$Result.GetResult<Prisma.$TipoArticuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticuloSolicitado model
   */ 
  interface ArticuloSolicitadoFieldRefs {
    readonly id: FieldRef<"ArticuloSolicitado", 'Int'>
    readonly solicitudCentroId: FieldRef<"ArticuloSolicitado", 'Int'>
    readonly tipoArticuloId: FieldRef<"ArticuloSolicitado", 'Int'>
    readonly cantidad: FieldRef<"ArticuloSolicitado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArticuloSolicitado findUnique
   */
  export type ArticuloSolicitadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitado to fetch.
     */
    where: ArticuloSolicitadoWhereUniqueInput
  }

  /**
   * ArticuloSolicitado findUniqueOrThrow
   */
  export type ArticuloSolicitadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitado to fetch.
     */
    where: ArticuloSolicitadoWhereUniqueInput
  }

  /**
   * ArticuloSolicitado findFirst
   */
  export type ArticuloSolicitadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitado to fetch.
     */
    where?: ArticuloSolicitadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicitados to fetch.
     */
    orderBy?: ArticuloSolicitadoOrderByWithRelationInput | ArticuloSolicitadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloSolicitados.
     */
    cursor?: ArticuloSolicitadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicitados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicitados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloSolicitados.
     */
    distinct?: ArticuloSolicitadoScalarFieldEnum | ArticuloSolicitadoScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitado findFirstOrThrow
   */
  export type ArticuloSolicitadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitado to fetch.
     */
    where?: ArticuloSolicitadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicitados to fetch.
     */
    orderBy?: ArticuloSolicitadoOrderByWithRelationInput | ArticuloSolicitadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticuloSolicitados.
     */
    cursor?: ArticuloSolicitadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicitados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicitados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticuloSolicitados.
     */
    distinct?: ArticuloSolicitadoScalarFieldEnum | ArticuloSolicitadoScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitado findMany
   */
  export type ArticuloSolicitadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * Filter, which ArticuloSolicitados to fetch.
     */
    where?: ArticuloSolicitadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticuloSolicitados to fetch.
     */
    orderBy?: ArticuloSolicitadoOrderByWithRelationInput | ArticuloSolicitadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticuloSolicitados.
     */
    cursor?: ArticuloSolicitadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticuloSolicitados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticuloSolicitados.
     */
    skip?: number
    distinct?: ArticuloSolicitadoScalarFieldEnum | ArticuloSolicitadoScalarFieldEnum[]
  }

  /**
   * ArticuloSolicitado create
   */
  export type ArticuloSolicitadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticuloSolicitado.
     */
    data: XOR<ArticuloSolicitadoCreateInput, ArticuloSolicitadoUncheckedCreateInput>
  }

  /**
   * ArticuloSolicitado createMany
   */
  export type ArticuloSolicitadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticuloSolicitados.
     */
    data: ArticuloSolicitadoCreateManyInput | ArticuloSolicitadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticuloSolicitado createManyAndReturn
   */
  export type ArticuloSolicitadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * The data used to create many ArticuloSolicitados.
     */
    data: ArticuloSolicitadoCreateManyInput | ArticuloSolicitadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloSolicitado update
   */
  export type ArticuloSolicitadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticuloSolicitado.
     */
    data: XOR<ArticuloSolicitadoUpdateInput, ArticuloSolicitadoUncheckedUpdateInput>
    /**
     * Choose, which ArticuloSolicitado to update.
     */
    where: ArticuloSolicitadoWhereUniqueInput
  }

  /**
   * ArticuloSolicitado updateMany
   */
  export type ArticuloSolicitadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticuloSolicitados.
     */
    data: XOR<ArticuloSolicitadoUpdateManyMutationInput, ArticuloSolicitadoUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloSolicitados to update
     */
    where?: ArticuloSolicitadoWhereInput
    /**
     * Limit how many ArticuloSolicitados to update.
     */
    limit?: number
  }

  /**
   * ArticuloSolicitado updateManyAndReturn
   */
  export type ArticuloSolicitadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * The data used to update ArticuloSolicitados.
     */
    data: XOR<ArticuloSolicitadoUpdateManyMutationInput, ArticuloSolicitadoUncheckedUpdateManyInput>
    /**
     * Filter which ArticuloSolicitados to update
     */
    where?: ArticuloSolicitadoWhereInput
    /**
     * Limit how many ArticuloSolicitados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticuloSolicitado upsert
   */
  export type ArticuloSolicitadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticuloSolicitado to update in case it exists.
     */
    where: ArticuloSolicitadoWhereUniqueInput
    /**
     * In case the ArticuloSolicitado found by the `where` argument doesn't exist, create a new ArticuloSolicitado with this data.
     */
    create: XOR<ArticuloSolicitadoCreateInput, ArticuloSolicitadoUncheckedCreateInput>
    /**
     * In case the ArticuloSolicitado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticuloSolicitadoUpdateInput, ArticuloSolicitadoUncheckedUpdateInput>
  }

  /**
   * ArticuloSolicitado delete
   */
  export type ArticuloSolicitadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
    /**
     * Filter which ArticuloSolicitado to delete.
     */
    where: ArticuloSolicitadoWhereUniqueInput
  }

  /**
   * ArticuloSolicitado deleteMany
   */
  export type ArticuloSolicitadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticuloSolicitados to delete
     */
    where?: ArticuloSolicitadoWhereInput
    /**
     * Limit how many ArticuloSolicitados to delete.
     */
    limit?: number
  }

  /**
   * ArticuloSolicitado without action
   */
  export type ArticuloSolicitadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloSolicitado
     */
    select?: ArticuloSolicitadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticuloSolicitado
     */
    omit?: ArticuloSolicitadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticuloSolicitadoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TipoArticuloScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    creadoEn: 'creadoEn'
  };

  export type TipoArticuloScalarFieldEnum = (typeof TipoArticuloScalarFieldEnum)[keyof typeof TipoArticuloScalarFieldEnum]


  export const CentroDistribucionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    responsable: 'responsable',
    telefono: 'telefono',
    latitud: 'latitud',
    longitud: 'longitud',
    horarioApertura: 'horarioApertura',
    horarioCierre: 'horarioCierre',
    descripcion: 'descripcion',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type CentroDistribucionScalarFieldEnum = (typeof CentroDistribucionScalarFieldEnum)[keyof typeof CentroDistribucionScalarFieldEnum]


  export const ArticuloOfertaScalarFieldEnum: {
    id: 'id',
    centroDistribucionId: 'centroDistribucionId',
    tipoArticuloId: 'tipoArticuloId',
    cantidad: 'cantidad',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ArticuloOfertaScalarFieldEnum = (typeof ArticuloOfertaScalarFieldEnum)[keyof typeof ArticuloOfertaScalarFieldEnum]


  export const SolicitudScalarFieldEnum: {
    id: 'id',
    direccion: 'direccion',
    contactoNombre: 'contactoNombre',
    contactoTel: 'contactoTel',
    estado: 'estado',
    latitud: 'latitud',
    longitud: 'longitud',
    descripcion: 'descripcion',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type SolicitudScalarFieldEnum = (typeof SolicitudScalarFieldEnum)[keyof typeof SolicitudScalarFieldEnum]


  export const ArticuloSolicitudScalarFieldEnum: {
    id: 'id',
    solicitudId: 'solicitudId',
    tipoArticuloId: 'tipoArticuloId',
    cantidad: 'cantidad',
    creadoEn: 'creadoEn'
  };

  export type ArticuloSolicitudScalarFieldEnum = (typeof ArticuloSolicitudScalarFieldEnum)[keyof typeof ArticuloSolicitudScalarFieldEnum]


  export const PeticionDonacionScalarFieldEnum: {
    id: 'id',
    direccion: 'direccion',
    contactoNombre: 'contactoNombre',
    contactoTel: 'contactoTel',
    latitud: 'latitud',
    longitud: 'longitud',
    descripcion: 'descripcion',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type PeticionDonacionScalarFieldEnum = (typeof PeticionDonacionScalarFieldEnum)[keyof typeof PeticionDonacionScalarFieldEnum]


  export const ArticuloPeticionScalarFieldEnum: {
    id: 'id',
    peticionDonacionId: 'peticionDonacionId',
    tipoArticuloId: 'tipoArticuloId',
    cantidad: 'cantidad',
    creadoEn: 'creadoEn'
  };

  export type ArticuloPeticionScalarFieldEnum = (typeof ArticuloPeticionScalarFieldEnum)[keyof typeof ArticuloPeticionScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    creadoEn: 'creadoEn'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const SolicitudCentroScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    responsable: 'responsable',
    telefono: 'telefono',
    horarioApertura: 'horarioApertura',
    horarioCierre: 'horarioCierre',
    latitud: 'latitud',
    longitud: 'longitud',
    descripcion: 'descripcion',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolicitudCentroScalarFieldEnum = (typeof SolicitudCentroScalarFieldEnum)[keyof typeof SolicitudCentroScalarFieldEnum]


  export const ArticuloSolicitadoScalarFieldEnum: {
    id: 'id',
    solicitudCentroId: 'solicitudCentroId',
    tipoArticuloId: 'tipoArticuloId',
    cantidad: 'cantidad'
  };

  export type ArticuloSolicitadoScalarFieldEnum = (typeof ArticuloSolicitadoScalarFieldEnum)[keyof typeof ArticuloSolicitadoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TipoArticuloWhereInput = {
    AND?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    OR?: TipoArticuloWhereInput[]
    NOT?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    id?: IntFilter<"TipoArticulo"> | number
    nombre?: StringFilter<"TipoArticulo"> | string
    creadoEn?: DateTimeFilter<"TipoArticulo"> | Date | string
    articulosOferta?: ArticuloOfertaListRelationFilter
    articulosPeticion?: ArticuloPeticionListRelationFilter
    articulosSolicitud?: ArticuloSolicitudListRelationFilter
    articulosSolicitados?: ArticuloSolicitadoListRelationFilter
  }

  export type TipoArticuloOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    articulosOferta?: ArticuloOfertaOrderByRelationAggregateInput
    articulosPeticion?: ArticuloPeticionOrderByRelationAggregateInput
    articulosSolicitud?: ArticuloSolicitudOrderByRelationAggregateInput
    articulosSolicitados?: ArticuloSolicitadoOrderByRelationAggregateInput
  }

  export type TipoArticuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    OR?: TipoArticuloWhereInput[]
    NOT?: TipoArticuloWhereInput | TipoArticuloWhereInput[]
    creadoEn?: DateTimeFilter<"TipoArticulo"> | Date | string
    articulosOferta?: ArticuloOfertaListRelationFilter
    articulosPeticion?: ArticuloPeticionListRelationFilter
    articulosSolicitud?: ArticuloSolicitudListRelationFilter
    articulosSolicitados?: ArticuloSolicitadoListRelationFilter
  }, "id" | "nombre">

  export type TipoArticuloOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    _count?: TipoArticuloCountOrderByAggregateInput
    _avg?: TipoArticuloAvgOrderByAggregateInput
    _max?: TipoArticuloMaxOrderByAggregateInput
    _min?: TipoArticuloMinOrderByAggregateInput
    _sum?: TipoArticuloSumOrderByAggregateInput
  }

  export type TipoArticuloScalarWhereWithAggregatesInput = {
    AND?: TipoArticuloScalarWhereWithAggregatesInput | TipoArticuloScalarWhereWithAggregatesInput[]
    OR?: TipoArticuloScalarWhereWithAggregatesInput[]
    NOT?: TipoArticuloScalarWhereWithAggregatesInput | TipoArticuloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoArticulo"> | number
    nombre?: StringWithAggregatesFilter<"TipoArticulo"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"TipoArticulo"> | Date | string
  }

  export type CentroDistribucionWhereInput = {
    AND?: CentroDistribucionWhereInput | CentroDistribucionWhereInput[]
    OR?: CentroDistribucionWhereInput[]
    NOT?: CentroDistribucionWhereInput | CentroDistribucionWhereInput[]
    id?: IntFilter<"CentroDistribucion"> | number
    nombre?: StringNullableFilter<"CentroDistribucion"> | string | null
    direccion?: StringFilter<"CentroDistribucion"> | string
    responsable?: StringFilter<"CentroDistribucion"> | string
    telefono?: StringNullableFilter<"CentroDistribucion"> | string | null
    latitud?: FloatFilter<"CentroDistribucion"> | number
    longitud?: FloatFilter<"CentroDistribucion"> | number
    horarioApertura?: StringNullableFilter<"CentroDistribucion"> | string | null
    horarioCierre?: StringNullableFilter<"CentroDistribucion"> | string | null
    descripcion?: StringNullableFilter<"CentroDistribucion"> | string | null
    activo?: BoolFilter<"CentroDistribucion"> | boolean
    creadoEn?: DateTimeFilter<"CentroDistribucion"> | Date | string
    actualizadoEn?: DateTimeFilter<"CentroDistribucion"> | Date | string
    articulos?: ArticuloOfertaListRelationFilter
  }

  export type CentroDistribucionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrderInput | SortOrder
    horarioCierre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    articulos?: ArticuloOfertaOrderByRelationAggregateInput
  }

  export type CentroDistribucionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CentroDistribucionWhereInput | CentroDistribucionWhereInput[]
    OR?: CentroDistribucionWhereInput[]
    NOT?: CentroDistribucionWhereInput | CentroDistribucionWhereInput[]
    nombre?: StringNullableFilter<"CentroDistribucion"> | string | null
    direccion?: StringFilter<"CentroDistribucion"> | string
    responsable?: StringFilter<"CentroDistribucion"> | string
    telefono?: StringNullableFilter<"CentroDistribucion"> | string | null
    latitud?: FloatFilter<"CentroDistribucion"> | number
    longitud?: FloatFilter<"CentroDistribucion"> | number
    horarioApertura?: StringNullableFilter<"CentroDistribucion"> | string | null
    horarioCierre?: StringNullableFilter<"CentroDistribucion"> | string | null
    descripcion?: StringNullableFilter<"CentroDistribucion"> | string | null
    activo?: BoolFilter<"CentroDistribucion"> | boolean
    creadoEn?: DateTimeFilter<"CentroDistribucion"> | Date | string
    actualizadoEn?: DateTimeFilter<"CentroDistribucion"> | Date | string
    articulos?: ArticuloOfertaListRelationFilter
  }, "id">

  export type CentroDistribucionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrderInput | SortOrder
    horarioCierre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: CentroDistribucionCountOrderByAggregateInput
    _avg?: CentroDistribucionAvgOrderByAggregateInput
    _max?: CentroDistribucionMaxOrderByAggregateInput
    _min?: CentroDistribucionMinOrderByAggregateInput
    _sum?: CentroDistribucionSumOrderByAggregateInput
  }

  export type CentroDistribucionScalarWhereWithAggregatesInput = {
    AND?: CentroDistribucionScalarWhereWithAggregatesInput | CentroDistribucionScalarWhereWithAggregatesInput[]
    OR?: CentroDistribucionScalarWhereWithAggregatesInput[]
    NOT?: CentroDistribucionScalarWhereWithAggregatesInput | CentroDistribucionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CentroDistribucion"> | number
    nombre?: StringNullableWithAggregatesFilter<"CentroDistribucion"> | string | null
    direccion?: StringWithAggregatesFilter<"CentroDistribucion"> | string
    responsable?: StringWithAggregatesFilter<"CentroDistribucion"> | string
    telefono?: StringNullableWithAggregatesFilter<"CentroDistribucion"> | string | null
    latitud?: FloatWithAggregatesFilter<"CentroDistribucion"> | number
    longitud?: FloatWithAggregatesFilter<"CentroDistribucion"> | number
    horarioApertura?: StringNullableWithAggregatesFilter<"CentroDistribucion"> | string | null
    horarioCierre?: StringNullableWithAggregatesFilter<"CentroDistribucion"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"CentroDistribucion"> | string | null
    activo?: BoolWithAggregatesFilter<"CentroDistribucion"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"CentroDistribucion"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"CentroDistribucion"> | Date | string
  }

  export type ArticuloOfertaWhereInput = {
    AND?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    OR?: ArticuloOfertaWhereInput[]
    NOT?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    id?: IntFilter<"ArticuloOferta"> | number
    centroDistribucionId?: IntFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntFilter<"ArticuloOferta"> | number
    cantidad?: IntFilter<"ArticuloOferta"> | number
    estado?: StringFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    centroDistribucion?: XOR<CentroDistribucionScalarRelationFilter, CentroDistribucionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }

  export type ArticuloOfertaOrderByWithRelationInput = {
    id?: SortOrder
    centroDistribucionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    centroDistribucion?: CentroDistribucionOrderByWithRelationInput
    tipoArticulo?: TipoArticuloOrderByWithRelationInput
  }

  export type ArticuloOfertaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    centroDistribucionId_tipoArticuloId?: ArticuloOfertaCentroDistribucionIdTipoArticuloIdCompoundUniqueInput
    AND?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    OR?: ArticuloOfertaWhereInput[]
    NOT?: ArticuloOfertaWhereInput | ArticuloOfertaWhereInput[]
    centroDistribucionId?: IntFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntFilter<"ArticuloOferta"> | number
    cantidad?: IntFilter<"ArticuloOferta"> | number
    estado?: StringFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    centroDistribucion?: XOR<CentroDistribucionScalarRelationFilter, CentroDistribucionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }, "id" | "centroDistribucionId_tipoArticuloId">

  export type ArticuloOfertaOrderByWithAggregationInput = {
    id?: SortOrder
    centroDistribucionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ArticuloOfertaCountOrderByAggregateInput
    _avg?: ArticuloOfertaAvgOrderByAggregateInput
    _max?: ArticuloOfertaMaxOrderByAggregateInput
    _min?: ArticuloOfertaMinOrderByAggregateInput
    _sum?: ArticuloOfertaSumOrderByAggregateInput
  }

  export type ArticuloOfertaScalarWhereWithAggregatesInput = {
    AND?: ArticuloOfertaScalarWhereWithAggregatesInput | ArticuloOfertaScalarWhereWithAggregatesInput[]
    OR?: ArticuloOfertaScalarWhereWithAggregatesInput[]
    NOT?: ArticuloOfertaScalarWhereWithAggregatesInput | ArticuloOfertaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticuloOferta"> | number
    centroDistribucionId?: IntWithAggregatesFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntWithAggregatesFilter<"ArticuloOferta"> | number
    cantidad?: IntWithAggregatesFilter<"ArticuloOferta"> | number
    estado?: StringWithAggregatesFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"ArticuloOferta"> | Date | string
  }

  export type SolicitudWhereInput = {
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    direccion?: StringFilter<"Solicitud"> | string
    contactoNombre?: StringFilter<"Solicitud"> | string
    contactoTel?: StringFilter<"Solicitud"> | string
    estado?: StringFilter<"Solicitud"> | string
    latitud?: FloatFilter<"Solicitud"> | number
    longitud?: FloatFilter<"Solicitud"> | number
    descripcion?: StringNullableFilter<"Solicitud"> | string | null
    creadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    actualizadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    articulos?: ArticuloSolicitudListRelationFilter
  }

  export type SolicitudOrderByWithRelationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    articulos?: ArticuloSolicitudOrderByRelationAggregateInput
  }

  export type SolicitudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    direccion?: StringFilter<"Solicitud"> | string
    contactoNombre?: StringFilter<"Solicitud"> | string
    contactoTel?: StringFilter<"Solicitud"> | string
    estado?: StringFilter<"Solicitud"> | string
    latitud?: FloatFilter<"Solicitud"> | number
    longitud?: FloatFilter<"Solicitud"> | number
    descripcion?: StringNullableFilter<"Solicitud"> | string | null
    creadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    actualizadoEn?: DateTimeFilter<"Solicitud"> | Date | string
    articulos?: ArticuloSolicitudListRelationFilter
  }, "id">

  export type SolicitudOrderByWithAggregationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: SolicitudCountOrderByAggregateInput
    _avg?: SolicitudAvgOrderByAggregateInput
    _max?: SolicitudMaxOrderByAggregateInput
    _min?: SolicitudMinOrderByAggregateInput
    _sum?: SolicitudSumOrderByAggregateInput
  }

  export type SolicitudScalarWhereWithAggregatesInput = {
    AND?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    OR?: SolicitudScalarWhereWithAggregatesInput[]
    NOT?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solicitud"> | number
    direccion?: StringWithAggregatesFilter<"Solicitud"> | string
    contactoNombre?: StringWithAggregatesFilter<"Solicitud"> | string
    contactoTel?: StringWithAggregatesFilter<"Solicitud"> | string
    estado?: StringWithAggregatesFilter<"Solicitud"> | string
    latitud?: FloatWithAggregatesFilter<"Solicitud"> | number
    longitud?: FloatWithAggregatesFilter<"Solicitud"> | number
    descripcion?: StringNullableWithAggregatesFilter<"Solicitud"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Solicitud"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Solicitud"> | Date | string
  }

  export type ArticuloSolicitudWhereInput = {
    AND?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    OR?: ArticuloSolicitudWhereInput[]
    NOT?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    id?: IntFilter<"ArticuloSolicitud"> | number
    solicitudId?: IntFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntFilter<"ArticuloSolicitud"> | number
    cantidad?: IntFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeFilter<"ArticuloSolicitud"> | Date | string
    solicitud?: XOR<SolicitudScalarRelationFilter, SolicitudWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }

  export type ArticuloSolicitudOrderByWithRelationInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    solicitud?: SolicitudOrderByWithRelationInput
    tipoArticulo?: TipoArticuloOrderByWithRelationInput
  }

  export type ArticuloSolicitudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    solicitudId_tipoArticuloId?: ArticuloSolicitudSolicitudIdTipoArticuloIdCompoundUniqueInput
    AND?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    OR?: ArticuloSolicitudWhereInput[]
    NOT?: ArticuloSolicitudWhereInput | ArticuloSolicitudWhereInput[]
    solicitudId?: IntFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntFilter<"ArticuloSolicitud"> | number
    cantidad?: IntFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeFilter<"ArticuloSolicitud"> | Date | string
    solicitud?: XOR<SolicitudScalarRelationFilter, SolicitudWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }, "id" | "solicitudId_tipoArticuloId">

  export type ArticuloSolicitudOrderByWithAggregationInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    _count?: ArticuloSolicitudCountOrderByAggregateInput
    _avg?: ArticuloSolicitudAvgOrderByAggregateInput
    _max?: ArticuloSolicitudMaxOrderByAggregateInput
    _min?: ArticuloSolicitudMinOrderByAggregateInput
    _sum?: ArticuloSolicitudSumOrderByAggregateInput
  }

  export type ArticuloSolicitudScalarWhereWithAggregatesInput = {
    AND?: ArticuloSolicitudScalarWhereWithAggregatesInput | ArticuloSolicitudScalarWhereWithAggregatesInput[]
    OR?: ArticuloSolicitudScalarWhereWithAggregatesInput[]
    NOT?: ArticuloSolicitudScalarWhereWithAggregatesInput | ArticuloSolicitudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticuloSolicitud"> | number
    solicitudId?: IntWithAggregatesFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntWithAggregatesFilter<"ArticuloSolicitud"> | number
    cantidad?: IntWithAggregatesFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"ArticuloSolicitud"> | Date | string
  }

  export type PeticionDonacionWhereInput = {
    AND?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    OR?: PeticionDonacionWhereInput[]
    NOT?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    id?: IntFilter<"PeticionDonacion"> | number
    direccion?: StringFilter<"PeticionDonacion"> | string
    contactoNombre?: StringFilter<"PeticionDonacion"> | string
    contactoTel?: StringFilter<"PeticionDonacion"> | string
    latitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    longitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    descripcion?: StringNullableFilter<"PeticionDonacion"> | string | null
    estado?: StringFilter<"PeticionDonacion"> | string
    creadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    articulos?: ArticuloPeticionListRelationFilter
  }

  export type PeticionDonacionOrderByWithRelationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    articulos?: ArticuloPeticionOrderByRelationAggregateInput
  }

  export type PeticionDonacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    OR?: PeticionDonacionWhereInput[]
    NOT?: PeticionDonacionWhereInput | PeticionDonacionWhereInput[]
    direccion?: StringFilter<"PeticionDonacion"> | string
    contactoNombre?: StringFilter<"PeticionDonacion"> | string
    contactoTel?: StringFilter<"PeticionDonacion"> | string
    latitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    longitud?: FloatNullableFilter<"PeticionDonacion"> | number | null
    descripcion?: StringNullableFilter<"PeticionDonacion"> | string | null
    estado?: StringFilter<"PeticionDonacion"> | string
    creadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    actualizadoEn?: DateTimeFilter<"PeticionDonacion"> | Date | string
    articulos?: ArticuloPeticionListRelationFilter
  }, "id">

  export type PeticionDonacionOrderByWithAggregationInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: PeticionDonacionCountOrderByAggregateInput
    _avg?: PeticionDonacionAvgOrderByAggregateInput
    _max?: PeticionDonacionMaxOrderByAggregateInput
    _min?: PeticionDonacionMinOrderByAggregateInput
    _sum?: PeticionDonacionSumOrderByAggregateInput
  }

  export type PeticionDonacionScalarWhereWithAggregatesInput = {
    AND?: PeticionDonacionScalarWhereWithAggregatesInput | PeticionDonacionScalarWhereWithAggregatesInput[]
    OR?: PeticionDonacionScalarWhereWithAggregatesInput[]
    NOT?: PeticionDonacionScalarWhereWithAggregatesInput | PeticionDonacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PeticionDonacion"> | number
    direccion?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    contactoNombre?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    contactoTel?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    latitud?: FloatNullableWithAggregatesFilter<"PeticionDonacion"> | number | null
    longitud?: FloatNullableWithAggregatesFilter<"PeticionDonacion"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"PeticionDonacion"> | string | null
    estado?: StringWithAggregatesFilter<"PeticionDonacion"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"PeticionDonacion"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"PeticionDonacion"> | Date | string
  }

  export type ArticuloPeticionWhereInput = {
    AND?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    OR?: ArticuloPeticionWhereInput[]
    NOT?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    id?: IntFilter<"ArticuloPeticion"> | number
    peticionDonacionId?: IntFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntFilter<"ArticuloPeticion"> | number
    cantidad?: IntFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeFilter<"ArticuloPeticion"> | Date | string
    peticionDonacion?: XOR<PeticionDonacionScalarRelationFilter, PeticionDonacionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }

  export type ArticuloPeticionOrderByWithRelationInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    peticionDonacion?: PeticionDonacionOrderByWithRelationInput
    tipoArticulo?: TipoArticuloOrderByWithRelationInput
  }

  export type ArticuloPeticionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    peticionDonacionId_tipoArticuloId?: ArticuloPeticionPeticionDonacionIdTipoArticuloIdCompoundUniqueInput
    AND?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    OR?: ArticuloPeticionWhereInput[]
    NOT?: ArticuloPeticionWhereInput | ArticuloPeticionWhereInput[]
    peticionDonacionId?: IntFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntFilter<"ArticuloPeticion"> | number
    cantidad?: IntFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeFilter<"ArticuloPeticion"> | Date | string
    peticionDonacion?: XOR<PeticionDonacionScalarRelationFilter, PeticionDonacionWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }, "id" | "peticionDonacionId_tipoArticuloId">

  export type ArticuloPeticionOrderByWithAggregationInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
    _count?: ArticuloPeticionCountOrderByAggregateInput
    _avg?: ArticuloPeticionAvgOrderByAggregateInput
    _max?: ArticuloPeticionMaxOrderByAggregateInput
    _min?: ArticuloPeticionMinOrderByAggregateInput
    _sum?: ArticuloPeticionSumOrderByAggregateInput
  }

  export type ArticuloPeticionScalarWhereWithAggregatesInput = {
    AND?: ArticuloPeticionScalarWhereWithAggregatesInput | ArticuloPeticionScalarWhereWithAggregatesInput[]
    OR?: ArticuloPeticionScalarWhereWithAggregatesInput[]
    NOT?: ArticuloPeticionScalarWhereWithAggregatesInput | ArticuloPeticionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    peticionDonacionId?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    cantidad?: IntWithAggregatesFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"ArticuloPeticion"> | Date | string
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id?: IntFilter<"Administrador"> | number
    email?: StringFilter<"Administrador"> | string
    password?: StringFilter<"Administrador"> | string
    nombre?: StringNullableFilter<"Administrador"> | string | null
    creadoEn?: DateTimeFilter<"Administrador"> | Date | string
  }

  export type AdministradorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    password?: StringFilter<"Administrador"> | string
    nombre?: StringNullableFilter<"Administrador"> | string | null
    creadoEn?: DateTimeFilter<"Administrador"> | Date | string
  }, "id" | "email">

  export type AdministradorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Administrador"> | number
    email?: StringWithAggregatesFilter<"Administrador"> | string
    password?: StringWithAggregatesFilter<"Administrador"> | string
    nombre?: StringNullableWithAggregatesFilter<"Administrador"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
  }

  export type SolicitudCentroWhereInput = {
    AND?: SolicitudCentroWhereInput | SolicitudCentroWhereInput[]
    OR?: SolicitudCentroWhereInput[]
    NOT?: SolicitudCentroWhereInput | SolicitudCentroWhereInput[]
    id?: IntFilter<"SolicitudCentro"> | number
    nombre?: StringNullableFilter<"SolicitudCentro"> | string | null
    direccion?: StringFilter<"SolicitudCentro"> | string
    responsable?: StringFilter<"SolicitudCentro"> | string
    telefono?: StringNullableFilter<"SolicitudCentro"> | string | null
    horarioApertura?: StringNullableFilter<"SolicitudCentro"> | string | null
    horarioCierre?: StringNullableFilter<"SolicitudCentro"> | string | null
    latitud?: FloatFilter<"SolicitudCentro"> | number
    longitud?: FloatFilter<"SolicitudCentro"> | number
    descripcion?: StringNullableFilter<"SolicitudCentro"> | string | null
    estado?: StringFilter<"SolicitudCentro"> | string
    createdAt?: DateTimeFilter<"SolicitudCentro"> | Date | string
    updatedAt?: DateTimeFilter<"SolicitudCentro"> | Date | string
    articulosSolicitados?: ArticuloSolicitadoListRelationFilter
  }

  export type SolicitudCentroOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrderInput | SortOrder
    horarioApertura?: SortOrderInput | SortOrder
    horarioCierre?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articulosSolicitados?: ArticuloSolicitadoOrderByRelationAggregateInput
  }

  export type SolicitudCentroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolicitudCentroWhereInput | SolicitudCentroWhereInput[]
    OR?: SolicitudCentroWhereInput[]
    NOT?: SolicitudCentroWhereInput | SolicitudCentroWhereInput[]
    nombre?: StringNullableFilter<"SolicitudCentro"> | string | null
    direccion?: StringFilter<"SolicitudCentro"> | string
    responsable?: StringFilter<"SolicitudCentro"> | string
    telefono?: StringNullableFilter<"SolicitudCentro"> | string | null
    horarioApertura?: StringNullableFilter<"SolicitudCentro"> | string | null
    horarioCierre?: StringNullableFilter<"SolicitudCentro"> | string | null
    latitud?: FloatFilter<"SolicitudCentro"> | number
    longitud?: FloatFilter<"SolicitudCentro"> | number
    descripcion?: StringNullableFilter<"SolicitudCentro"> | string | null
    estado?: StringFilter<"SolicitudCentro"> | string
    createdAt?: DateTimeFilter<"SolicitudCentro"> | Date | string
    updatedAt?: DateTimeFilter<"SolicitudCentro"> | Date | string
    articulosSolicitados?: ArticuloSolicitadoListRelationFilter
  }, "id">

  export type SolicitudCentroOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrderInput | SortOrder
    horarioApertura?: SortOrderInput | SortOrder
    horarioCierre?: SortOrderInput | SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolicitudCentroCountOrderByAggregateInput
    _avg?: SolicitudCentroAvgOrderByAggregateInput
    _max?: SolicitudCentroMaxOrderByAggregateInput
    _min?: SolicitudCentroMinOrderByAggregateInput
    _sum?: SolicitudCentroSumOrderByAggregateInput
  }

  export type SolicitudCentroScalarWhereWithAggregatesInput = {
    AND?: SolicitudCentroScalarWhereWithAggregatesInput | SolicitudCentroScalarWhereWithAggregatesInput[]
    OR?: SolicitudCentroScalarWhereWithAggregatesInput[]
    NOT?: SolicitudCentroScalarWhereWithAggregatesInput | SolicitudCentroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SolicitudCentro"> | number
    nombre?: StringNullableWithAggregatesFilter<"SolicitudCentro"> | string | null
    direccion?: StringWithAggregatesFilter<"SolicitudCentro"> | string
    responsable?: StringWithAggregatesFilter<"SolicitudCentro"> | string
    telefono?: StringNullableWithAggregatesFilter<"SolicitudCentro"> | string | null
    horarioApertura?: StringNullableWithAggregatesFilter<"SolicitudCentro"> | string | null
    horarioCierre?: StringNullableWithAggregatesFilter<"SolicitudCentro"> | string | null
    latitud?: FloatWithAggregatesFilter<"SolicitudCentro"> | number
    longitud?: FloatWithAggregatesFilter<"SolicitudCentro"> | number
    descripcion?: StringNullableWithAggregatesFilter<"SolicitudCentro"> | string | null
    estado?: StringWithAggregatesFilter<"SolicitudCentro"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SolicitudCentro"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SolicitudCentro"> | Date | string
  }

  export type ArticuloSolicitadoWhereInput = {
    AND?: ArticuloSolicitadoWhereInput | ArticuloSolicitadoWhereInput[]
    OR?: ArticuloSolicitadoWhereInput[]
    NOT?: ArticuloSolicitadoWhereInput | ArticuloSolicitadoWhereInput[]
    id?: IntFilter<"ArticuloSolicitado"> | number
    solicitudCentroId?: IntFilter<"ArticuloSolicitado"> | number
    tipoArticuloId?: IntFilter<"ArticuloSolicitado"> | number
    cantidad?: IntFilter<"ArticuloSolicitado"> | number
    solicitudCentro?: XOR<SolicitudCentroScalarRelationFilter, SolicitudCentroWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }

  export type ArticuloSolicitadoOrderByWithRelationInput = {
    id?: SortOrder
    solicitudCentroId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    solicitudCentro?: SolicitudCentroOrderByWithRelationInput
    tipoArticulo?: TipoArticuloOrderByWithRelationInput
  }

  export type ArticuloSolicitadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticuloSolicitadoWhereInput | ArticuloSolicitadoWhereInput[]
    OR?: ArticuloSolicitadoWhereInput[]
    NOT?: ArticuloSolicitadoWhereInput | ArticuloSolicitadoWhereInput[]
    solicitudCentroId?: IntFilter<"ArticuloSolicitado"> | number
    tipoArticuloId?: IntFilter<"ArticuloSolicitado"> | number
    cantidad?: IntFilter<"ArticuloSolicitado"> | number
    solicitudCentro?: XOR<SolicitudCentroScalarRelationFilter, SolicitudCentroWhereInput>
    tipoArticulo?: XOR<TipoArticuloScalarRelationFilter, TipoArticuloWhereInput>
  }, "id">

  export type ArticuloSolicitadoOrderByWithAggregationInput = {
    id?: SortOrder
    solicitudCentroId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    _count?: ArticuloSolicitadoCountOrderByAggregateInput
    _avg?: ArticuloSolicitadoAvgOrderByAggregateInput
    _max?: ArticuloSolicitadoMaxOrderByAggregateInput
    _min?: ArticuloSolicitadoMinOrderByAggregateInput
    _sum?: ArticuloSolicitadoSumOrderByAggregateInput
  }

  export type ArticuloSolicitadoScalarWhereWithAggregatesInput = {
    AND?: ArticuloSolicitadoScalarWhereWithAggregatesInput | ArticuloSolicitadoScalarWhereWithAggregatesInput[]
    OR?: ArticuloSolicitadoScalarWhereWithAggregatesInput[]
    NOT?: ArticuloSolicitadoScalarWhereWithAggregatesInput | ArticuloSolicitadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticuloSolicitado"> | number
    solicitudCentroId?: IntWithAggregatesFilter<"ArticuloSolicitado"> | number
    tipoArticuloId?: IntWithAggregatesFilter<"ArticuloSolicitado"> | number
    cantidad?: IntWithAggregatesFilter<"ArticuloSolicitado"> | number
  }

  export type TipoArticuloCreateInput = {
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloCreateManyInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
  }

  export type TipoArticuloUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentroDistribucionCreateInput = {
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloOfertaCreateNestedManyWithoutCentroDistribucionInput
  }

  export type CentroDistribucionUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloOfertaUncheckedCreateNestedManyWithoutCentroDistribucionInput
  }

  export type CentroDistribucionUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloOfertaUpdateManyWithoutCentroDistribucionNestedInput
  }

  export type CentroDistribucionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloOfertaUncheckedUpdateManyWithoutCentroDistribucionNestedInput
  }

  export type CentroDistribucionCreateManyInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CentroDistribucionUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentroDistribucionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaCreateInput = {
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    centroDistribucion: CentroDistribucionCreateNestedOneWithoutArticulosInput
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosOfertaInput
  }

  export type ArticuloOfertaUncheckedCreateInput = {
    id?: number
    centroDistribucionId: number
    tipoArticuloId: number
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    centroDistribucion?: CentroDistribucionUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosOfertaNestedInput
  }

  export type ArticuloOfertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    centroDistribucionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaCreateManyInput = {
    id?: number
    centroDistribucionId: number
    tipoArticuloId: number
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    centroDistribucionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudCreateInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloSolicitudCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloSolicitudUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUpdateInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloSolicitudUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudCreateManyInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type SolicitudUpdateManyMutationInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudCreateInput = {
    cantidad: number
    creadoEn?: Date | string
    solicitud: SolicitudCreateNestedOneWithoutArticulosInput
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosSolicitudInput
  }

  export type ArticuloSolicitudUncheckedCreateInput = {
    id?: number
    solicitudId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: SolicitudUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosSolicitudNestedInput
  }

  export type ArticuloSolicitudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudCreateManyInput = {
    id?: number
    solicitudId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeticionDonacionCreateInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloPeticionCreateNestedManyWithoutPeticionDonacionInput
  }

  export type PeticionDonacionUncheckedCreateInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    articulos?: ArticuloPeticionUncheckedCreateNestedManyWithoutPeticionDonacionInput
  }

  export type PeticionDonacionUpdateInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloPeticionUpdateManyWithoutPeticionDonacionNestedInput
  }

  export type PeticionDonacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulos?: ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionNestedInput
  }

  export type PeticionDonacionCreateManyInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PeticionDonacionUpdateManyMutationInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeticionDonacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionCreateInput = {
    cantidad: number
    creadoEn?: Date | string
    peticionDonacion: PeticionDonacionCreateNestedOneWithoutArticulosInput
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosPeticionInput
  }

  export type ArticuloPeticionUncheckedCreateInput = {
    id?: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    peticionDonacion?: PeticionDonacionUpdateOneRequiredWithoutArticulosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosPeticionNestedInput
  }

  export type ArticuloPeticionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionCreateManyInput = {
    id?: number
    peticionDonacionId: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateInput = {
    email: string
    password: string
    nombre?: string | null
    creadoEn?: Date | string
  }

  export type AdministradorUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    creadoEn?: Date | string
  }

  export type AdministradorUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateManyInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    creadoEn?: Date | string
  }

  export type AdministradorUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudCentroCreateInput = {
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    horarioApertura?: string | null
    horarioCierre?: string | null
    latitud: number
    longitud: number
    descripcion?: string | null
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articulosSolicitados?: ArticuloSolicitadoCreateNestedManyWithoutSolicitudCentroInput
  }

  export type SolicitudCentroUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    horarioApertura?: string | null
    horarioCierre?: string | null
    latitud: number
    longitud: number
    descripcion?: string | null
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articulosSolicitados?: ArticuloSolicitadoUncheckedCreateNestedManyWithoutSolicitudCentroInput
  }

  export type SolicitudCentroUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosSolicitados?: ArticuloSolicitadoUpdateManyWithoutSolicitudCentroNestedInput
  }

  export type SolicitudCentroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosSolicitados?: ArticuloSolicitadoUncheckedUpdateManyWithoutSolicitudCentroNestedInput
  }

  export type SolicitudCentroCreateManyInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    horarioApertura?: string | null
    horarioCierre?: string | null
    latitud: number
    longitud: number
    descripcion?: string | null
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolicitudCentroUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudCentroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitadoCreateInput = {
    cantidad: number
    solicitudCentro: SolicitudCentroCreateNestedOneWithoutArticulosSolicitadosInput
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosSolicitadosInput
  }

  export type ArticuloSolicitadoUncheckedCreateInput = {
    id?: number
    solicitudCentroId: number
    tipoArticuloId: number
    cantidad: number
  }

  export type ArticuloSolicitadoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    solicitudCentro?: SolicitudCentroUpdateOneRequiredWithoutArticulosSolicitadosNestedInput
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosSolicitadosNestedInput
  }

  export type ArticuloSolicitadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudCentroId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ArticuloSolicitadoCreateManyInput = {
    id?: number
    solicitudCentroId: number
    tipoArticuloId: number
    cantidad: number
  }

  export type ArticuloSolicitadoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ArticuloSolicitadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudCentroId?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArticuloOfertaListRelationFilter = {
    every?: ArticuloOfertaWhereInput
    some?: ArticuloOfertaWhereInput
    none?: ArticuloOfertaWhereInput
  }

  export type ArticuloPeticionListRelationFilter = {
    every?: ArticuloPeticionWhereInput
    some?: ArticuloPeticionWhereInput
    none?: ArticuloPeticionWhereInput
  }

  export type ArticuloSolicitudListRelationFilter = {
    every?: ArticuloSolicitudWhereInput
    some?: ArticuloSolicitudWhereInput
    none?: ArticuloSolicitudWhereInput
  }

  export type ArticuloSolicitadoListRelationFilter = {
    every?: ArticuloSolicitadoWhereInput
    some?: ArticuloSolicitadoWhereInput
    none?: ArticuloSolicitadoWhereInput
  }

  export type ArticuloOfertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticuloPeticionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticuloSolicitudOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticuloSolicitadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoArticuloCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoArticuloMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type TipoArticuloSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CentroDistribucionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type CentroDistribucionAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type CentroDistribucionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type CentroDistribucionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type CentroDistribucionSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CentroDistribucionScalarRelationFilter = {
    is?: CentroDistribucionWhereInput
    isNot?: CentroDistribucionWhereInput
  }

  export type TipoArticuloScalarRelationFilter = {
    is?: TipoArticuloWhereInput
    isNot?: TipoArticuloWhereInput
  }

  export type ArticuloOfertaCentroDistribucionIdTipoArticuloIdCompoundUniqueInput = {
    centroDistribucionId: number
    tipoArticuloId: number
  }

  export type ArticuloOfertaCountOrderByAggregateInput = {
    id?: SortOrder
    centroDistribucionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ArticuloOfertaAvgOrderByAggregateInput = {
    id?: SortOrder
    centroDistribucionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloOfertaMaxOrderByAggregateInput = {
    id?: SortOrder
    centroDistribucionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ArticuloOfertaMinOrderByAggregateInput = {
    id?: SortOrder
    centroDistribucionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ArticuloOfertaSumOrderByAggregateInput = {
    id?: SortOrder
    centroDistribucionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type SolicitudCountOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type SolicitudMaxOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudMinOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    estado?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type SolicitudSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type SolicitudScalarRelationFilter = {
    is?: SolicitudWhereInput
    isNot?: SolicitudWhereInput
  }

  export type ArticuloSolicitudSolicitudIdTipoArticuloIdCompoundUniqueInput = {
    solicitudId: number
    tipoArticuloId: number
  }

  export type ArticuloSolicitudCountOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloSolicitudAvgOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloSolicitudMaxOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloSolicitudMinOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloSolicitudSumOrderByAggregateInput = {
    id?: SortOrder
    solicitudId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PeticionDonacionCountOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PeticionDonacionAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type PeticionDonacionMaxOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PeticionDonacionMinOrderByAggregateInput = {
    id?: SortOrder
    direccion?: SortOrder
    contactoNombre?: SortOrder
    contactoTel?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PeticionDonacionSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PeticionDonacionScalarRelationFilter = {
    is?: PeticionDonacionWhereInput
    isNot?: PeticionDonacionWhereInput
  }

  export type ArticuloPeticionPeticionDonacionIdTipoArticuloIdCompoundUniqueInput = {
    peticionDonacionId: number
    tipoArticuloId: number
  }

  export type ArticuloPeticionCountOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloPeticionAvgOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloPeticionMaxOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloPeticionMinOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
    creadoEn?: SortOrder
  }

  export type ArticuloPeticionSumOrderByAggregateInput = {
    id?: SortOrder
    peticionDonacionId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type AdministradorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SolicitudCentroCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolicitudCentroAvgOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type SolicitudCentroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolicitudCentroMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    responsable?: SortOrder
    telefono?: SortOrder
    horarioApertura?: SortOrder
    horarioCierre?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolicitudCentroSumOrderByAggregateInput = {
    id?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type SolicitudCentroScalarRelationFilter = {
    is?: SolicitudCentroWhereInput
    isNot?: SolicitudCentroWhereInput
  }

  export type ArticuloSolicitadoCountOrderByAggregateInput = {
    id?: SortOrder
    solicitudCentroId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloSolicitadoAvgOrderByAggregateInput = {
    id?: SortOrder
    solicitudCentroId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloSolicitadoMaxOrderByAggregateInput = {
    id?: SortOrder
    solicitudCentroId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloSolicitadoMinOrderByAggregateInput = {
    id?: SortOrder
    solicitudCentroId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloSolicitadoSumOrderByAggregateInput = {
    id?: SortOrder
    solicitudCentroId?: SortOrder
    tipoArticuloId?: SortOrder
    cantidad?: SortOrder
  }

  export type ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type ArticuloSolicitadoCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitadoCreateWithoutTipoArticuloInput[] | ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitadoCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
  }

  export type ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type ArticuloSolicitadoUncheckedCreateNestedManyWithoutTipoArticuloInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitadoCreateWithoutTipoArticuloInput[] | ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitadoCreateManyTipoArticuloInputEnvelope
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type ArticuloSolicitadoUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitadoCreateWithoutTipoArticuloInput[] | ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloSolicitadoUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitadoUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitadoCreateManyTipoArticuloInputEnvelope
    set?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    disconnect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    delete?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    update?: ArticuloSolicitadoUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitadoUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloSolicitadoUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloSolicitadoUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloSolicitadoScalarWhereInput | ArticuloSolicitadoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput> | ArticuloOfertaCreateWithoutTipoArticuloInput[] | ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput | ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloOfertaCreateManyTipoArticuloInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput> | ArticuloPeticionCreateWithoutTipoArticuloInput[] | ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput | ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloPeticionCreateManyTipoArticuloInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitudCreateWithoutTipoArticuloInput[] | ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitudCreateManyTipoArticuloInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type ArticuloSolicitadoUncheckedUpdateManyWithoutTipoArticuloNestedInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput> | ArticuloSolicitadoCreateWithoutTipoArticuloInput[] | ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput | ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput[]
    upsert?: ArticuloSolicitadoUpsertWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitadoUpsertWithWhereUniqueWithoutTipoArticuloInput[]
    createMany?: ArticuloSolicitadoCreateManyTipoArticuloInputEnvelope
    set?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    disconnect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    delete?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    update?: ArticuloSolicitadoUpdateWithWhereUniqueWithoutTipoArticuloInput | ArticuloSolicitadoUpdateWithWhereUniqueWithoutTipoArticuloInput[]
    updateMany?: ArticuloSolicitadoUpdateManyWithWhereWithoutTipoArticuloInput | ArticuloSolicitadoUpdateManyWithWhereWithoutTipoArticuloInput[]
    deleteMany?: ArticuloSolicitadoScalarWhereInput | ArticuloSolicitadoScalarWhereInput[]
  }

  export type ArticuloOfertaCreateNestedManyWithoutCentroDistribucionInput = {
    create?: XOR<ArticuloOfertaCreateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput> | ArticuloOfertaCreateWithoutCentroDistribucionInput[] | ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput | ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput[]
    createMany?: ArticuloOfertaCreateManyCentroDistribucionInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type ArticuloOfertaUncheckedCreateNestedManyWithoutCentroDistribucionInput = {
    create?: XOR<ArticuloOfertaCreateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput> | ArticuloOfertaCreateWithoutCentroDistribucionInput[] | ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput | ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput[]
    createMany?: ArticuloOfertaCreateManyCentroDistribucionInputEnvelope
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ArticuloOfertaUpdateManyWithoutCentroDistribucionNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput> | ArticuloOfertaCreateWithoutCentroDistribucionInput[] | ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput | ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutCentroDistribucionInput | ArticuloOfertaUpsertWithWhereUniqueWithoutCentroDistribucionInput[]
    createMany?: ArticuloOfertaCreateManyCentroDistribucionInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutCentroDistribucionInput | ArticuloOfertaUpdateWithWhereUniqueWithoutCentroDistribucionInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutCentroDistribucionInput | ArticuloOfertaUpdateManyWithWhereWithoutCentroDistribucionInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutCentroDistribucionNestedInput = {
    create?: XOR<ArticuloOfertaCreateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput> | ArticuloOfertaCreateWithoutCentroDistribucionInput[] | ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput[]
    connectOrCreate?: ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput | ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput[]
    upsert?: ArticuloOfertaUpsertWithWhereUniqueWithoutCentroDistribucionInput | ArticuloOfertaUpsertWithWhereUniqueWithoutCentroDistribucionInput[]
    createMany?: ArticuloOfertaCreateManyCentroDistribucionInputEnvelope
    set?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    disconnect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    delete?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    connect?: ArticuloOfertaWhereUniqueInput | ArticuloOfertaWhereUniqueInput[]
    update?: ArticuloOfertaUpdateWithWhereUniqueWithoutCentroDistribucionInput | ArticuloOfertaUpdateWithWhereUniqueWithoutCentroDistribucionInput[]
    updateMany?: ArticuloOfertaUpdateManyWithWhereWithoutCentroDistribucionInput | ArticuloOfertaUpdateManyWithWhereWithoutCentroDistribucionInput[]
    deleteMany?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
  }

  export type CentroDistribucionCreateNestedOneWithoutArticulosInput = {
    create?: XOR<CentroDistribucionCreateWithoutArticulosInput, CentroDistribucionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: CentroDistribucionCreateOrConnectWithoutArticulosInput
    connect?: CentroDistribucionWhereUniqueInput
  }

  export type TipoArticuloCreateNestedOneWithoutArticulosOfertaInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosOfertaInput
    connect?: TipoArticuloWhereUniqueInput
  }

  export type CentroDistribucionUpdateOneRequiredWithoutArticulosNestedInput = {
    create?: XOR<CentroDistribucionCreateWithoutArticulosInput, CentroDistribucionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: CentroDistribucionCreateOrConnectWithoutArticulosInput
    upsert?: CentroDistribucionUpsertWithoutArticulosInput
    connect?: CentroDistribucionWhereUniqueInput
    update?: XOR<XOR<CentroDistribucionUpdateToOneWithWhereWithoutArticulosInput, CentroDistribucionUpdateWithoutArticulosInput>, CentroDistribucionUncheckedUpdateWithoutArticulosInput>
  }

  export type TipoArticuloUpdateOneRequiredWithoutArticulosOfertaNestedInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosOfertaInput
    upsert?: TipoArticuloUpsertWithoutArticulosOfertaInput
    connect?: TipoArticuloWhereUniqueInput
    update?: XOR<XOR<TipoArticuloUpdateToOneWithWhereWithoutArticulosOfertaInput, TipoArticuloUpdateWithoutArticulosOfertaInput>, TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput>
  }

  export type ArticuloSolicitudCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type ArticuloSolicitudUncheckedCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
  }

  export type ArticuloSolicitudUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput | ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput> | ArticuloSolicitudCreateWithoutSolicitudInput[] | ArticuloSolicitudUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: ArticuloSolicitudCreateOrConnectWithoutSolicitudInput | ArticuloSolicitudCreateOrConnectWithoutSolicitudInput[]
    upsert?: ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: ArticuloSolicitudCreateManySolicitudInputEnvelope
    set?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    disconnect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    delete?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    connect?: ArticuloSolicitudWhereUniqueInput | ArticuloSolicitudWhereUniqueInput[]
    update?: ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput | ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput | ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
  }

  export type SolicitudCreateNestedOneWithoutArticulosInput = {
    create?: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutArticulosInput
    connect?: SolicitudWhereUniqueInput
  }

  export type TipoArticuloCreateNestedOneWithoutArticulosSolicitudInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosSolicitudInput
    connect?: TipoArticuloWhereUniqueInput
  }

  export type SolicitudUpdateOneRequiredWithoutArticulosNestedInput = {
    create?: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutArticulosInput
    upsert?: SolicitudUpsertWithoutArticulosInput
    connect?: SolicitudWhereUniqueInput
    update?: XOR<XOR<SolicitudUpdateToOneWithWhereWithoutArticulosInput, SolicitudUpdateWithoutArticulosInput>, SolicitudUncheckedUpdateWithoutArticulosInput>
  }

  export type TipoArticuloUpdateOneRequiredWithoutArticulosSolicitudNestedInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosSolicitudInput
    upsert?: TipoArticuloUpsertWithoutArticulosSolicitudInput
    connect?: TipoArticuloWhereUniqueInput
    update?: XOR<XOR<TipoArticuloUpdateToOneWithWhereWithoutArticulosSolicitudInput, TipoArticuloUpdateWithoutArticulosSolicitudInput>, TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput>
  }

  export type ArticuloPeticionCreateNestedManyWithoutPeticionDonacionInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type ArticuloPeticionUncheckedCreateNestedManyWithoutPeticionDonacionInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticuloPeticionUpdateManyWithoutPeticionDonacionNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput | ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionNestedInput = {
    create?: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput> | ArticuloPeticionCreateWithoutPeticionDonacionInput[] | ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput[]
    connectOrCreate?: ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput | ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput[]
    upsert?: ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput[]
    createMany?: ArticuloPeticionCreateManyPeticionDonacionInputEnvelope
    set?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    disconnect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    delete?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    connect?: ArticuloPeticionWhereUniqueInput | ArticuloPeticionWhereUniqueInput[]
    update?: ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput | ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput[]
    updateMany?: ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput | ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput[]
    deleteMany?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
  }

  export type PeticionDonacionCreateNestedOneWithoutArticulosInput = {
    create?: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: PeticionDonacionCreateOrConnectWithoutArticulosInput
    connect?: PeticionDonacionWhereUniqueInput
  }

  export type TipoArticuloCreateNestedOneWithoutArticulosPeticionInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosPeticionInput
    connect?: TipoArticuloWhereUniqueInput
  }

  export type PeticionDonacionUpdateOneRequiredWithoutArticulosNestedInput = {
    create?: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
    connectOrCreate?: PeticionDonacionCreateOrConnectWithoutArticulosInput
    upsert?: PeticionDonacionUpsertWithoutArticulosInput
    connect?: PeticionDonacionWhereUniqueInput
    update?: XOR<XOR<PeticionDonacionUpdateToOneWithWhereWithoutArticulosInput, PeticionDonacionUpdateWithoutArticulosInput>, PeticionDonacionUncheckedUpdateWithoutArticulosInput>
  }

  export type TipoArticuloUpdateOneRequiredWithoutArticulosPeticionNestedInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosPeticionInput
    upsert?: TipoArticuloUpsertWithoutArticulosPeticionInput
    connect?: TipoArticuloWhereUniqueInput
    update?: XOR<XOR<TipoArticuloUpdateToOneWithWhereWithoutArticulosPeticionInput, TipoArticuloUpdateWithoutArticulosPeticionInput>, TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput>
  }

  export type ArticuloSolicitadoCreateNestedManyWithoutSolicitudCentroInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput> | ArticuloSolicitadoCreateWithoutSolicitudCentroInput[] | ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput | ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput[]
    createMany?: ArticuloSolicitadoCreateManySolicitudCentroInputEnvelope
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
  }

  export type ArticuloSolicitadoUncheckedCreateNestedManyWithoutSolicitudCentroInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput> | ArticuloSolicitadoCreateWithoutSolicitudCentroInput[] | ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput | ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput[]
    createMany?: ArticuloSolicitadoCreateManySolicitudCentroInputEnvelope
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
  }

  export type ArticuloSolicitadoUpdateManyWithoutSolicitudCentroNestedInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput> | ArticuloSolicitadoCreateWithoutSolicitudCentroInput[] | ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput | ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput[]
    upsert?: ArticuloSolicitadoUpsertWithWhereUniqueWithoutSolicitudCentroInput | ArticuloSolicitadoUpsertWithWhereUniqueWithoutSolicitudCentroInput[]
    createMany?: ArticuloSolicitadoCreateManySolicitudCentroInputEnvelope
    set?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    disconnect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    delete?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    update?: ArticuloSolicitadoUpdateWithWhereUniqueWithoutSolicitudCentroInput | ArticuloSolicitadoUpdateWithWhereUniqueWithoutSolicitudCentroInput[]
    updateMany?: ArticuloSolicitadoUpdateManyWithWhereWithoutSolicitudCentroInput | ArticuloSolicitadoUpdateManyWithWhereWithoutSolicitudCentroInput[]
    deleteMany?: ArticuloSolicitadoScalarWhereInput | ArticuloSolicitadoScalarWhereInput[]
  }

  export type ArticuloSolicitadoUncheckedUpdateManyWithoutSolicitudCentroNestedInput = {
    create?: XOR<ArticuloSolicitadoCreateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput> | ArticuloSolicitadoCreateWithoutSolicitudCentroInput[] | ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput[]
    connectOrCreate?: ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput | ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput[]
    upsert?: ArticuloSolicitadoUpsertWithWhereUniqueWithoutSolicitudCentroInput | ArticuloSolicitadoUpsertWithWhereUniqueWithoutSolicitudCentroInput[]
    createMany?: ArticuloSolicitadoCreateManySolicitudCentroInputEnvelope
    set?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    disconnect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    delete?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    connect?: ArticuloSolicitadoWhereUniqueInput | ArticuloSolicitadoWhereUniqueInput[]
    update?: ArticuloSolicitadoUpdateWithWhereUniqueWithoutSolicitudCentroInput | ArticuloSolicitadoUpdateWithWhereUniqueWithoutSolicitudCentroInput[]
    updateMany?: ArticuloSolicitadoUpdateManyWithWhereWithoutSolicitudCentroInput | ArticuloSolicitadoUpdateManyWithWhereWithoutSolicitudCentroInput[]
    deleteMany?: ArticuloSolicitadoScalarWhereInput | ArticuloSolicitadoScalarWhereInput[]
  }

  export type SolicitudCentroCreateNestedOneWithoutArticulosSolicitadosInput = {
    create?: XOR<SolicitudCentroCreateWithoutArticulosSolicitadosInput, SolicitudCentroUncheckedCreateWithoutArticulosSolicitadosInput>
    connectOrCreate?: SolicitudCentroCreateOrConnectWithoutArticulosSolicitadosInput
    connect?: SolicitudCentroWhereUniqueInput
  }

  export type TipoArticuloCreateNestedOneWithoutArticulosSolicitadosInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosSolicitadosInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitadosInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosSolicitadosInput
    connect?: TipoArticuloWhereUniqueInput
  }

  export type SolicitudCentroUpdateOneRequiredWithoutArticulosSolicitadosNestedInput = {
    create?: XOR<SolicitudCentroCreateWithoutArticulosSolicitadosInput, SolicitudCentroUncheckedCreateWithoutArticulosSolicitadosInput>
    connectOrCreate?: SolicitudCentroCreateOrConnectWithoutArticulosSolicitadosInput
    upsert?: SolicitudCentroUpsertWithoutArticulosSolicitadosInput
    connect?: SolicitudCentroWhereUniqueInput
    update?: XOR<XOR<SolicitudCentroUpdateToOneWithWhereWithoutArticulosSolicitadosInput, SolicitudCentroUpdateWithoutArticulosSolicitadosInput>, SolicitudCentroUncheckedUpdateWithoutArticulosSolicitadosInput>
  }

  export type TipoArticuloUpdateOneRequiredWithoutArticulosSolicitadosNestedInput = {
    create?: XOR<TipoArticuloCreateWithoutArticulosSolicitadosInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitadosInput>
    connectOrCreate?: TipoArticuloCreateOrConnectWithoutArticulosSolicitadosInput
    upsert?: TipoArticuloUpsertWithoutArticulosSolicitadosInput
    connect?: TipoArticuloWhereUniqueInput
    update?: XOR<XOR<TipoArticuloUpdateToOneWithWhereWithoutArticulosSolicitadosInput, TipoArticuloUpdateWithoutArticulosSolicitadosInput>, TipoArticuloUncheckedUpdateWithoutArticulosSolicitadosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ArticuloOfertaCreateWithoutTipoArticuloInput = {
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    centroDistribucion: CentroDistribucionCreateNestedOneWithoutArticulosInput
  }

  export type ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput = {
    id?: number
    centroDistribucionId: number
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaCreateOrConnectWithoutTipoArticuloInput = {
    where: ArticuloOfertaWhereUniqueInput
    create: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaCreateManyTipoArticuloInputEnvelope = {
    data: ArticuloOfertaCreateManyTipoArticuloInput | ArticuloOfertaCreateManyTipoArticuloInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloPeticionCreateWithoutTipoArticuloInput = {
    cantidad: number
    creadoEn?: Date | string
    peticionDonacion: PeticionDonacionCreateNestedOneWithoutArticulosInput
  }

  export type ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput = {
    id?: number
    peticionDonacionId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionCreateOrConnectWithoutTipoArticuloInput = {
    where: ArticuloPeticionWhereUniqueInput
    create: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionCreateManyTipoArticuloInputEnvelope = {
    data: ArticuloPeticionCreateManyTipoArticuloInput | ArticuloPeticionCreateManyTipoArticuloInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloSolicitudCreateWithoutTipoArticuloInput = {
    cantidad: number
    creadoEn?: Date | string
    solicitud: SolicitudCreateNestedOneWithoutArticulosInput
  }

  export type ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput = {
    id?: number
    solicitudId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudCreateOrConnectWithoutTipoArticuloInput = {
    where: ArticuloSolicitudWhereUniqueInput
    create: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudCreateManyTipoArticuloInputEnvelope = {
    data: ArticuloSolicitudCreateManyTipoArticuloInput | ArticuloSolicitudCreateManyTipoArticuloInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloSolicitadoCreateWithoutTipoArticuloInput = {
    cantidad: number
    solicitudCentro: SolicitudCentroCreateNestedOneWithoutArticulosSolicitadosInput
  }

  export type ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput = {
    id?: number
    solicitudCentroId: number
    cantidad: number
  }

  export type ArticuloSolicitadoCreateOrConnectWithoutTipoArticuloInput = {
    where: ArticuloSolicitadoWhereUniqueInput
    create: XOR<ArticuloSolicitadoCreateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitadoCreateManyTipoArticuloInputEnvelope = {
    data: ArticuloSolicitadoCreateManyTipoArticuloInput | ArticuloSolicitadoCreateManyTipoArticuloInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloOfertaUpsertWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloOfertaWhereUniqueInput
    update: XOR<ArticuloOfertaUpdateWithoutTipoArticuloInput, ArticuloOfertaUncheckedUpdateWithoutTipoArticuloInput>
    create: XOR<ArticuloOfertaCreateWithoutTipoArticuloInput, ArticuloOfertaUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaUpdateWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloOfertaWhereUniqueInput
    data: XOR<ArticuloOfertaUpdateWithoutTipoArticuloInput, ArticuloOfertaUncheckedUpdateWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaUpdateManyWithWhereWithoutTipoArticuloInput = {
    where: ArticuloOfertaScalarWhereInput
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloInput>
  }

  export type ArticuloOfertaScalarWhereInput = {
    AND?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
    OR?: ArticuloOfertaScalarWhereInput[]
    NOT?: ArticuloOfertaScalarWhereInput | ArticuloOfertaScalarWhereInput[]
    id?: IntFilter<"ArticuloOferta"> | number
    centroDistribucionId?: IntFilter<"ArticuloOferta"> | number
    tipoArticuloId?: IntFilter<"ArticuloOferta"> | number
    cantidad?: IntFilter<"ArticuloOferta"> | number
    estado?: StringFilter<"ArticuloOferta"> | string
    creadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
    actualizadoEn?: DateTimeFilter<"ArticuloOferta"> | Date | string
  }

  export type ArticuloPeticionUpsertWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloPeticionWhereUniqueInput
    update: XOR<ArticuloPeticionUpdateWithoutTipoArticuloInput, ArticuloPeticionUncheckedUpdateWithoutTipoArticuloInput>
    create: XOR<ArticuloPeticionCreateWithoutTipoArticuloInput, ArticuloPeticionUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionUpdateWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloPeticionWhereUniqueInput
    data: XOR<ArticuloPeticionUpdateWithoutTipoArticuloInput, ArticuloPeticionUncheckedUpdateWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionUpdateManyWithWhereWithoutTipoArticuloInput = {
    where: ArticuloPeticionScalarWhereInput
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloInput>
  }

  export type ArticuloPeticionScalarWhereInput = {
    AND?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
    OR?: ArticuloPeticionScalarWhereInput[]
    NOT?: ArticuloPeticionScalarWhereInput | ArticuloPeticionScalarWhereInput[]
    id?: IntFilter<"ArticuloPeticion"> | number
    peticionDonacionId?: IntFilter<"ArticuloPeticion"> | number
    tipoArticuloId?: IntFilter<"ArticuloPeticion"> | number
    cantidad?: IntFilter<"ArticuloPeticion"> | number
    creadoEn?: DateTimeFilter<"ArticuloPeticion"> | Date | string
  }

  export type ArticuloSolicitudUpsertWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloSolicitudWhereUniqueInput
    update: XOR<ArticuloSolicitudUpdateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloInput>
    create: XOR<ArticuloSolicitudCreateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudUpdateWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloSolicitudWhereUniqueInput
    data: XOR<ArticuloSolicitudUpdateWithoutTipoArticuloInput, ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudUpdateManyWithWhereWithoutTipoArticuloInput = {
    where: ArticuloSolicitudScalarWhereInput
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitudScalarWhereInput = {
    AND?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
    OR?: ArticuloSolicitudScalarWhereInput[]
    NOT?: ArticuloSolicitudScalarWhereInput | ArticuloSolicitudScalarWhereInput[]
    id?: IntFilter<"ArticuloSolicitud"> | number
    solicitudId?: IntFilter<"ArticuloSolicitud"> | number
    tipoArticuloId?: IntFilter<"ArticuloSolicitud"> | number
    cantidad?: IntFilter<"ArticuloSolicitud"> | number
    creadoEn?: DateTimeFilter<"ArticuloSolicitud"> | Date | string
  }

  export type ArticuloSolicitadoUpsertWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloSolicitadoWhereUniqueInput
    update: XOR<ArticuloSolicitadoUpdateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedUpdateWithoutTipoArticuloInput>
    create: XOR<ArticuloSolicitadoCreateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedCreateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitadoUpdateWithWhereUniqueWithoutTipoArticuloInput = {
    where: ArticuloSolicitadoWhereUniqueInput
    data: XOR<ArticuloSolicitadoUpdateWithoutTipoArticuloInput, ArticuloSolicitadoUncheckedUpdateWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitadoUpdateManyWithWhereWithoutTipoArticuloInput = {
    where: ArticuloSolicitadoScalarWhereInput
    data: XOR<ArticuloSolicitadoUpdateManyMutationInput, ArticuloSolicitadoUncheckedUpdateManyWithoutTipoArticuloInput>
  }

  export type ArticuloSolicitadoScalarWhereInput = {
    AND?: ArticuloSolicitadoScalarWhereInput | ArticuloSolicitadoScalarWhereInput[]
    OR?: ArticuloSolicitadoScalarWhereInput[]
    NOT?: ArticuloSolicitadoScalarWhereInput | ArticuloSolicitadoScalarWhereInput[]
    id?: IntFilter<"ArticuloSolicitado"> | number
    solicitudCentroId?: IntFilter<"ArticuloSolicitado"> | number
    tipoArticuloId?: IntFilter<"ArticuloSolicitado"> | number
    cantidad?: IntFilter<"ArticuloSolicitado"> | number
  }

  export type ArticuloOfertaCreateWithoutCentroDistribucionInput = {
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosOfertaInput
  }

  export type ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaCreateOrConnectWithoutCentroDistribucionInput = {
    where: ArticuloOfertaWhereUniqueInput
    create: XOR<ArticuloOfertaCreateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput>
  }

  export type ArticuloOfertaCreateManyCentroDistribucionInputEnvelope = {
    data: ArticuloOfertaCreateManyCentroDistribucionInput | ArticuloOfertaCreateManyCentroDistribucionInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloOfertaUpsertWithWhereUniqueWithoutCentroDistribucionInput = {
    where: ArticuloOfertaWhereUniqueInput
    update: XOR<ArticuloOfertaUpdateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedUpdateWithoutCentroDistribucionInput>
    create: XOR<ArticuloOfertaCreateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedCreateWithoutCentroDistribucionInput>
  }

  export type ArticuloOfertaUpdateWithWhereUniqueWithoutCentroDistribucionInput = {
    where: ArticuloOfertaWhereUniqueInput
    data: XOR<ArticuloOfertaUpdateWithoutCentroDistribucionInput, ArticuloOfertaUncheckedUpdateWithoutCentroDistribucionInput>
  }

  export type ArticuloOfertaUpdateManyWithWhereWithoutCentroDistribucionInput = {
    where: ArticuloOfertaScalarWhereInput
    data: XOR<ArticuloOfertaUpdateManyMutationInput, ArticuloOfertaUncheckedUpdateManyWithoutCentroDistribucionInput>
  }

  export type CentroDistribucionCreateWithoutArticulosInput = {
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CentroDistribucionUncheckedCreateWithoutArticulosInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    latitud: number
    longitud: number
    horarioApertura?: string | null
    horarioCierre?: string | null
    descripcion?: string | null
    activo?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type CentroDistribucionCreateOrConnectWithoutArticulosInput = {
    where: CentroDistribucionWhereUniqueInput
    create: XOR<CentroDistribucionCreateWithoutArticulosInput, CentroDistribucionUncheckedCreateWithoutArticulosInput>
  }

  export type TipoArticuloCreateWithoutArticulosOfertaInput = {
    nombre: string
    creadoEn?: Date | string
    articulosPeticion?: ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateWithoutArticulosOfertaInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosPeticion?: ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloCreateOrConnectWithoutArticulosOfertaInput = {
    where: TipoArticuloWhereUniqueInput
    create: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
  }

  export type CentroDistribucionUpsertWithoutArticulosInput = {
    update: XOR<CentroDistribucionUpdateWithoutArticulosInput, CentroDistribucionUncheckedUpdateWithoutArticulosInput>
    create: XOR<CentroDistribucionCreateWithoutArticulosInput, CentroDistribucionUncheckedCreateWithoutArticulosInput>
    where?: CentroDistribucionWhereInput
  }

  export type CentroDistribucionUpdateToOneWithWhereWithoutArticulosInput = {
    where?: CentroDistribucionWhereInput
    data: XOR<CentroDistribucionUpdateWithoutArticulosInput, CentroDistribucionUncheckedUpdateWithoutArticulosInput>
  }

  export type CentroDistribucionUpdateWithoutArticulosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentroDistribucionUncheckedUpdateWithoutArticulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUpsertWithoutArticulosOfertaInput = {
    update: XOR<TipoArticuloUpdateWithoutArticulosOfertaInput, TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput>
    create: XOR<TipoArticuloCreateWithoutArticulosOfertaInput, TipoArticuloUncheckedCreateWithoutArticulosOfertaInput>
    where?: TipoArticuloWhereInput
  }

  export type TipoArticuloUpdateToOneWithWhereWithoutArticulosOfertaInput = {
    where?: TipoArticuloWhereInput
    data: XOR<TipoArticuloUpdateWithoutArticulosOfertaInput, TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput>
  }

  export type TipoArticuloUpdateWithoutArticulosOfertaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosPeticion?: ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateWithoutArticulosOfertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosPeticion?: ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type ArticuloSolicitudCreateWithoutSolicitudInput = {
    cantidad: number
    creadoEn?: Date | string
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosSolicitudInput
  }

  export type ArticuloSolicitudUncheckedCreateWithoutSolicitudInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudCreateOrConnectWithoutSolicitudInput = {
    where: ArticuloSolicitudWhereUniqueInput
    create: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput>
  }

  export type ArticuloSolicitudCreateManySolicitudInputEnvelope = {
    data: ArticuloSolicitudCreateManySolicitudInput | ArticuloSolicitudCreateManySolicitudInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloSolicitudUpsertWithWhereUniqueWithoutSolicitudInput = {
    where: ArticuloSolicitudWhereUniqueInput
    update: XOR<ArticuloSolicitudUpdateWithoutSolicitudInput, ArticuloSolicitudUncheckedUpdateWithoutSolicitudInput>
    create: XOR<ArticuloSolicitudCreateWithoutSolicitudInput, ArticuloSolicitudUncheckedCreateWithoutSolicitudInput>
  }

  export type ArticuloSolicitudUpdateWithWhereUniqueWithoutSolicitudInput = {
    where: ArticuloSolicitudWhereUniqueInput
    data: XOR<ArticuloSolicitudUpdateWithoutSolicitudInput, ArticuloSolicitudUncheckedUpdateWithoutSolicitudInput>
  }

  export type ArticuloSolicitudUpdateManyWithWhereWithoutSolicitudInput = {
    where: ArticuloSolicitudScalarWhereInput
    data: XOR<ArticuloSolicitudUpdateManyMutationInput, ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudInput>
  }

  export type SolicitudCreateWithoutArticulosInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type SolicitudUncheckedCreateWithoutArticulosInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    estado?: string
    latitud: number
    longitud: number
    descripcion?: string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type SolicitudCreateOrConnectWithoutArticulosInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
  }

  export type TipoArticuloCreateWithoutArticulosSolicitudInput = {
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloCreateOrConnectWithoutArticulosSolicitudInput = {
    where: TipoArticuloWhereUniqueInput
    create: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
  }

  export type SolicitudUpsertWithoutArticulosInput = {
    update: XOR<SolicitudUpdateWithoutArticulosInput, SolicitudUncheckedUpdateWithoutArticulosInput>
    create: XOR<SolicitudCreateWithoutArticulosInput, SolicitudUncheckedCreateWithoutArticulosInput>
    where?: SolicitudWhereInput
  }

  export type SolicitudUpdateToOneWithWhereWithoutArticulosInput = {
    where?: SolicitudWhereInput
    data: XOR<SolicitudUpdateWithoutArticulosInput, SolicitudUncheckedUpdateWithoutArticulosInput>
  }

  export type SolicitudUpdateWithoutArticulosInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudUncheckedUpdateWithoutArticulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUpsertWithoutArticulosSolicitudInput = {
    update: XOR<TipoArticuloUpdateWithoutArticulosSolicitudInput, TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput>
    create: XOR<TipoArticuloCreateWithoutArticulosSolicitudInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitudInput>
    where?: TipoArticuloWhereInput
  }

  export type TipoArticuloUpdateToOneWithWhereWithoutArticulosSolicitudInput = {
    where?: TipoArticuloWhereInput
    data: XOR<TipoArticuloUpdateWithoutArticulosSolicitudInput, TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput>
  }

  export type TipoArticuloUpdateWithoutArticulosSolicitudInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateWithoutArticulosSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type ArticuloPeticionCreateWithoutPeticionDonacionInput = {
    cantidad: number
    creadoEn?: Date | string
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosPeticionInput
  }

  export type ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionCreateOrConnectWithoutPeticionDonacionInput = {
    where: ArticuloPeticionWhereUniqueInput
    create: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput>
  }

  export type ArticuloPeticionCreateManyPeticionDonacionInputEnvelope = {
    data: ArticuloPeticionCreateManyPeticionDonacionInput | ArticuloPeticionCreateManyPeticionDonacionInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloPeticionUpsertWithWhereUniqueWithoutPeticionDonacionInput = {
    where: ArticuloPeticionWhereUniqueInput
    update: XOR<ArticuloPeticionUpdateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedUpdateWithoutPeticionDonacionInput>
    create: XOR<ArticuloPeticionCreateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedCreateWithoutPeticionDonacionInput>
  }

  export type ArticuloPeticionUpdateWithWhereUniqueWithoutPeticionDonacionInput = {
    where: ArticuloPeticionWhereUniqueInput
    data: XOR<ArticuloPeticionUpdateWithoutPeticionDonacionInput, ArticuloPeticionUncheckedUpdateWithoutPeticionDonacionInput>
  }

  export type ArticuloPeticionUpdateManyWithWhereWithoutPeticionDonacionInput = {
    where: ArticuloPeticionScalarWhereInput
    data: XOR<ArticuloPeticionUpdateManyMutationInput, ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionInput>
  }

  export type PeticionDonacionCreateWithoutArticulosInput = {
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PeticionDonacionUncheckedCreateWithoutArticulosInput = {
    id?: number
    direccion: string
    contactoNombre: string
    contactoTel: string
    latitud?: number | null
    longitud?: number | null
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PeticionDonacionCreateOrConnectWithoutArticulosInput = {
    where: PeticionDonacionWhereUniqueInput
    create: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
  }

  export type TipoArticuloCreateWithoutArticulosPeticionInput = {
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateWithoutArticulosPeticionInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloCreateOrConnectWithoutArticulosPeticionInput = {
    where: TipoArticuloWhereUniqueInput
    create: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
  }

  export type PeticionDonacionUpsertWithoutArticulosInput = {
    update: XOR<PeticionDonacionUpdateWithoutArticulosInput, PeticionDonacionUncheckedUpdateWithoutArticulosInput>
    create: XOR<PeticionDonacionCreateWithoutArticulosInput, PeticionDonacionUncheckedCreateWithoutArticulosInput>
    where?: PeticionDonacionWhereInput
  }

  export type PeticionDonacionUpdateToOneWithWhereWithoutArticulosInput = {
    where?: PeticionDonacionWhereInput
    data: XOR<PeticionDonacionUpdateWithoutArticulosInput, PeticionDonacionUncheckedUpdateWithoutArticulosInput>
  }

  export type PeticionDonacionUpdateWithoutArticulosInput = {
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeticionDonacionUncheckedUpdateWithoutArticulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: StringFieldUpdateOperationsInput | string
    contactoNombre?: StringFieldUpdateOperationsInput | string
    contactoTel?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUpsertWithoutArticulosPeticionInput = {
    update: XOR<TipoArticuloUpdateWithoutArticulosPeticionInput, TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput>
    create: XOR<TipoArticuloCreateWithoutArticulosPeticionInput, TipoArticuloUncheckedCreateWithoutArticulosPeticionInput>
    where?: TipoArticuloWhereInput
  }

  export type TipoArticuloUpdateToOneWithWhereWithoutArticulosPeticionInput = {
    where?: TipoArticuloWhereInput
    data: XOR<TipoArticuloUpdateWithoutArticulosPeticionInput, TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput>
  }

  export type TipoArticuloUpdateWithoutArticulosPeticionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateWithoutArticulosPeticionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitados?: ArticuloSolicitadoUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type ArticuloSolicitadoCreateWithoutSolicitudCentroInput = {
    cantidad: number
    tipoArticulo: TipoArticuloCreateNestedOneWithoutArticulosSolicitadosInput
  }

  export type ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
  }

  export type ArticuloSolicitadoCreateOrConnectWithoutSolicitudCentroInput = {
    where: ArticuloSolicitadoWhereUniqueInput
    create: XOR<ArticuloSolicitadoCreateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput>
  }

  export type ArticuloSolicitadoCreateManySolicitudCentroInputEnvelope = {
    data: ArticuloSolicitadoCreateManySolicitudCentroInput | ArticuloSolicitadoCreateManySolicitudCentroInput[]
    skipDuplicates?: boolean
  }

  export type ArticuloSolicitadoUpsertWithWhereUniqueWithoutSolicitudCentroInput = {
    where: ArticuloSolicitadoWhereUniqueInput
    update: XOR<ArticuloSolicitadoUpdateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedUpdateWithoutSolicitudCentroInput>
    create: XOR<ArticuloSolicitadoCreateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedCreateWithoutSolicitudCentroInput>
  }

  export type ArticuloSolicitadoUpdateWithWhereUniqueWithoutSolicitudCentroInput = {
    where: ArticuloSolicitadoWhereUniqueInput
    data: XOR<ArticuloSolicitadoUpdateWithoutSolicitudCentroInput, ArticuloSolicitadoUncheckedUpdateWithoutSolicitudCentroInput>
  }

  export type ArticuloSolicitadoUpdateManyWithWhereWithoutSolicitudCentroInput = {
    where: ArticuloSolicitadoScalarWhereInput
    data: XOR<ArticuloSolicitadoUpdateManyMutationInput, ArticuloSolicitadoUncheckedUpdateManyWithoutSolicitudCentroInput>
  }

  export type SolicitudCentroCreateWithoutArticulosSolicitadosInput = {
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    horarioApertura?: string | null
    horarioCierre?: string | null
    latitud: number
    longitud: number
    descripcion?: string | null
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolicitudCentroUncheckedCreateWithoutArticulosSolicitadosInput = {
    id?: number
    nombre?: string | null
    direccion: string
    responsable: string
    telefono?: string | null
    horarioApertura?: string | null
    horarioCierre?: string | null
    latitud: number
    longitud: number
    descripcion?: string | null
    estado: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolicitudCentroCreateOrConnectWithoutArticulosSolicitadosInput = {
    where: SolicitudCentroWhereUniqueInput
    create: XOR<SolicitudCentroCreateWithoutArticulosSolicitadosInput, SolicitudCentroUncheckedCreateWithoutArticulosSolicitadosInput>
  }

  export type TipoArticuloCreateWithoutArticulosSolicitadosInput = {
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloUncheckedCreateWithoutArticulosSolicitadosInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    articulosOferta?: ArticuloOfertaUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosPeticion?: ArticuloPeticionUncheckedCreateNestedManyWithoutTipoArticuloInput
    articulosSolicitud?: ArticuloSolicitudUncheckedCreateNestedManyWithoutTipoArticuloInput
  }

  export type TipoArticuloCreateOrConnectWithoutArticulosSolicitadosInput = {
    where: TipoArticuloWhereUniqueInput
    create: XOR<TipoArticuloCreateWithoutArticulosSolicitadosInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitadosInput>
  }

  export type SolicitudCentroUpsertWithoutArticulosSolicitadosInput = {
    update: XOR<SolicitudCentroUpdateWithoutArticulosSolicitadosInput, SolicitudCentroUncheckedUpdateWithoutArticulosSolicitadosInput>
    create: XOR<SolicitudCentroCreateWithoutArticulosSolicitadosInput, SolicitudCentroUncheckedCreateWithoutArticulosSolicitadosInput>
    where?: SolicitudCentroWhereInput
  }

  export type SolicitudCentroUpdateToOneWithWhereWithoutArticulosSolicitadosInput = {
    where?: SolicitudCentroWhereInput
    data: XOR<SolicitudCentroUpdateWithoutArticulosSolicitadosInput, SolicitudCentroUncheckedUpdateWithoutArticulosSolicitadosInput>
  }

  export type SolicitudCentroUpdateWithoutArticulosSolicitadosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudCentroUncheckedUpdateWithoutArticulosSolicitadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    responsable?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    horarioApertura?: NullableStringFieldUpdateOperationsInput | string | null
    horarioCierre?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: FloatFieldUpdateOperationsInput | number
    longitud?: FloatFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoArticuloUpsertWithoutArticulosSolicitadosInput = {
    update: XOR<TipoArticuloUpdateWithoutArticulosSolicitadosInput, TipoArticuloUncheckedUpdateWithoutArticulosSolicitadosInput>
    create: XOR<TipoArticuloCreateWithoutArticulosSolicitadosInput, TipoArticuloUncheckedCreateWithoutArticulosSolicitadosInput>
    where?: TipoArticuloWhereInput
  }

  export type TipoArticuloUpdateToOneWithWhereWithoutArticulosSolicitadosInput = {
    where?: TipoArticuloWhereInput
    data: XOR<TipoArticuloUpdateWithoutArticulosSolicitadosInput, TipoArticuloUncheckedUpdateWithoutArticulosSolicitadosInput>
  }

  export type TipoArticuloUpdateWithoutArticulosSolicitadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUpdateManyWithoutTipoArticuloNestedInput
  }

  export type TipoArticuloUncheckedUpdateWithoutArticulosSolicitadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    articulosOferta?: ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosPeticion?: ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloNestedInput
    articulosSolicitud?: ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloNestedInput
  }

  export type ArticuloOfertaCreateManyTipoArticuloInput = {
    id?: number
    centroDistribucionId: number
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloPeticionCreateManyTipoArticuloInput = {
    id?: number
    peticionDonacionId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudCreateManyTipoArticuloInput = {
    id?: number
    solicitudId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitadoCreateManyTipoArticuloInput = {
    id?: number
    solicitudCentroId: number
    cantidad: number
  }

  export type ArticuloOfertaUpdateWithoutTipoArticuloInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    centroDistribucion?: CentroDistribucionUpdateOneRequiredWithoutArticulosNestedInput
  }

  export type ArticuloOfertaUncheckedUpdateWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    centroDistribucionId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    centroDistribucionId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUpdateWithoutTipoArticuloInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    peticionDonacion?: PeticionDonacionUpdateOneRequiredWithoutArticulosNestedInput
  }

  export type ArticuloPeticionUncheckedUpdateWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    peticionDonacionId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUpdateWithoutTipoArticuloInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitud?: SolicitudUpdateOneRequiredWithoutArticulosNestedInput
  }

  export type ArticuloSolicitudUncheckedUpdateWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitadoUpdateWithoutTipoArticuloInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    solicitudCentro?: SolicitudCentroUpdateOneRequiredWithoutArticulosSolicitadosNestedInput
  }

  export type ArticuloSolicitadoUncheckedUpdateWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudCentroId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ArticuloSolicitadoUncheckedUpdateManyWithoutTipoArticuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    solicitudCentroId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ArticuloOfertaCreateManyCentroDistribucionInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    estado?: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ArticuloOfertaUpdateWithoutCentroDistribucionInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosOfertaNestedInput
  }

  export type ArticuloOfertaUncheckedUpdateWithoutCentroDistribucionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloOfertaUncheckedUpdateManyWithoutCentroDistribucionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudCreateManySolicitudInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloSolicitudUpdateWithoutSolicitudInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosSolicitudNestedInput
  }

  export type ArticuloSolicitudUncheckedUpdateWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitudUncheckedUpdateManyWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionCreateManyPeticionDonacionInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
    creadoEn?: Date | string
  }

  export type ArticuloPeticionUpdateWithoutPeticionDonacionInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosPeticionNestedInput
  }

  export type ArticuloPeticionUncheckedUpdateWithoutPeticionDonacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloPeticionUncheckedUpdateManyWithoutPeticionDonacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticuloSolicitadoCreateManySolicitudCentroInput = {
    id?: number
    tipoArticuloId: number
    cantidad: number
  }

  export type ArticuloSolicitadoUpdateWithoutSolicitudCentroInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    tipoArticulo?: TipoArticuloUpdateOneRequiredWithoutArticulosSolicitadosNestedInput
  }

  export type ArticuloSolicitadoUncheckedUpdateWithoutSolicitudCentroInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ArticuloSolicitadoUncheckedUpdateManyWithoutSolicitudCentroInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoArticuloId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}